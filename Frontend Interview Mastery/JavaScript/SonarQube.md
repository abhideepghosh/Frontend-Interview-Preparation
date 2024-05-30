# SonarQube Overview

**SonarQube** is an open-source platform developed by SonarSource for continuous inspection of code quality. It performs automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities. SonarQube supports multiple programming languages and integrates with various build tools and CI/CD pipelines.

#### Key Features:
1. **Static Code Analysis:** Detects issues like bugs, vulnerabilities, and code smells.
2. **Code Coverage:** Measures how much of the code is covered by automated tests.
3. **Code Duplication:** Identifies duplicate code blocks.
4. **Maintainability Index:** Provides a measure of code maintainability.
5. **Security Analysis:** Identifies potential security vulnerabilities.
6. **Technical Debt Measurement:** Quantifies the effort required to fix code quality issues.
7. **Custom Rules and Plugins:** Allows the addition of custom rules and extends functionality via plugins.

### SonarQube with JavaScript (Node.js) Projects

SonarQube can be seamlessly integrated into JavaScript projects, including Node.js applications. Here’s how it’s typically used:

#### Installation and Setup

1. **Install SonarQube:**
   - You can download and install SonarQube from the official [SonarQube website](https://www.sonarqube.org/downloads/).
   - Start the SonarQube server, usually by running the `sonar.sh` script on Unix-based systems or `StartSonar.bat` on Windows.

2. **SonarQube Scanner:**
   - Install the SonarQube Scanner, which is used to perform the code analysis.
   - You can install the scanner globally via npm:
     ```sh
     npm install -g sonarqube-scanner
     ```

3. **Configure the Project:**
   - Create a `sonar-project.properties` file in the root directory of your project. This file contains configuration settings for the SonarQube analysis. Example:
     ```properties
     sonar.projectKey=my-nodejs-project
     sonar.projectName=My Node.js Project
     sonar.projectVersion=1.0
     sonar.sources=src
     sonar.exclusions=node_modules/**
     sonar.javascript.lcov.reportPaths=coverage/lcov.info
     ```

4. **Run the Scanner:**
   - Execute the SonarQube scanner from the root directory of your project:
     ```sh
     sonar-scanner
     ```

#### Integration with CI/CD

1. **Jenkins:**
   - Use the SonarQube plugin in Jenkins to integrate the analysis into your CI pipeline.
   - Configure the Jenkins job to run the SonarQube scanner as a build step.

2. **GitHub Actions:**
   - Create a GitHub Actions workflow that runs the SonarQube scanner on pull requests and pushes.
   - Example GitHub Actions workflow:
     ```yaml
     name: CI
     on: [push, pull_request]
     jobs:
       sonar:
         runs-on: ubuntu-latest
         steps:
         - uses: actions/checkout@v2
         - name: Install Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '14'
         - name: Install dependencies
           run: npm install
         - name: Run tests
           run: npm

# Use Case (Example)
Here's a comprehensive step-by-step guide on setting up SonarQube to analyze a Node.js project using Jasmine and Karma for testing, and Jenkins for continuous integration.

### Step 1: Set Up SonarQube

1. **Download and Install SonarQube:**
   - Download SonarQube from the official [SonarQube website](https://www.sonarqube.org/downloads/).
   - Extract the downloaded files.
   - Navigate to the `bin` directory and run the appropriate script for your operating system:
     - On Linux/Mac: `./sonar.sh start`
     - On Windows: `StartSonar.bat`

2. **Access SonarQube:**
   - Open your browser and go to `http://localhost:9000`.
   - Log in with the default credentials (admin/admin).
   - Change the default password after the first login.

### Step 2: Install SonarQube Scanner

1. **Install SonarQube Scanner:**
   - Globally install the SonarQube scanner via npm:
     ```sh
     npm install -g sonarqube-scanner
     ```

### Step 3: Prepare Your Node.js Project

1. **Create a Node.js Project:**
   - Initialize a new Node.js project (if you don't already have one):
     ```sh
     mkdir my-nodejs-project
     cd my-nodejs-project
     npm init -y
     ```

2. **Add Example Code:**
   - Create a simple JavaScript file, for example `src/index.js`:
     ```javascript
     function add(a, b) {
       return a + b;
     }

     module.exports = add;
     ```

3. **Install Jasmine and Karma:**
   - Install Jasmine, Karma, and related packages:
     ```sh
     npm install --save-dev jasmine karma karma-jasmine karma-chrome-launcher karma-coverage
     ```

4. **Configure Jasmine:**
   - Initialize Jasmine:
     ```sh
     npx jasmine init
     ```
   - Create a test file `spec/index.spec.js`:
     ```javascript
     const add = require('../src/index');

     describe('add function', function() {
       it('should add two numbers', function() {
         expect(add(1, 2)).toBe(3);
       });
     });
     ```

5. **Configure Karma:**
   - Initialize Karma:
     ```sh
     npx karma init
     ```
   - Update the `karma.conf.js` configuration file:
     ```javascript
     module.exports = function(config) {
       config.set({
         basePath: '',
         frameworks: ['jasmine'],
         files: [
           'src/**/*.js',
           'spec/**/*.js'
         ],
         preprocessors: {
           'src/**/*.js': ['coverage']
         },
         reporters: ['progress', 'coverage'],
         coverageReporter: {
           type: 'lcov',
           dir: 'coverage/'
         },
         port: 9876,
         colors: true,
         logLevel: config.LOG_INFO,
         autoWatch: true,
         browsers: ['ChromeHeadless'],
         singleRun: true,
         concurrency: Infinity
       });
     };
     ```

6. **Update `package.json` Scripts:**
   - Modify `package.json` to include scripts for testing and code coverage:
     ```json
     "scripts": {
       "test": "karma start karma.conf.js"
     }
     ```

7. **Run Tests:**
   - Execute the tests:
     ```sh
     npm test
     ```

### Step 4: Configure SonarQube for Your Project

1. **Create a `sonar-project.properties` File:**
   - In the root directory of your project, create a file named `sonar-project.properties`:
     ```properties
     sonar.projectKey=my-nodejs-project
     sonar.projectName=My Node.js Project
     sonar.projectVersion=1.0
     sonar.sources=src
     sonar.tests=spec
     sonar.test.inclusions=spec/**/*.js
     sonar.javascript.lcov.reportPaths=coverage/lcov.info
     sonar.exclusions=node_modules/**
     ```

### Step 5: Set Up Jenkins for CI

1. **Install Jenkins:**
   - Download and install Jenkins from the official [Jenkins website](https://www.jenkins.io/download/).
   - Follow the installation instructions for your operating system.

2. **Configure Jenkins:**
   - Start Jenkins and access it via `http://localhost:8080`.
   - Install necessary plugins, including the SonarQube plugin and Node.js plugin.

3. **Create a Jenkins Pipeline Job:**
   - In Jenkins, create a new Pipeline job.
   - Configure the pipeline script. Here is an example Jenkinsfile:

     ```groovy
     pipeline {
       agent any

       tools {
         nodejs "NodeJS" // Make sure NodeJS is installed and named appropriately in Jenkins
       }

       environment {
         SONAR_SCANNER_HOME = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
       }

       stages {
         stage('Checkout') {
           steps {
             git 'https://your-repository-url.git'
           }
         }

         stage('Install Dependencies') {
           steps {
             sh 'npm install'
           }
         }

         stage('Run Tests') {
           steps {
             sh 'npm test'
           }
         }

         stage('SonarQube Analysis') {
           steps {
             withSonarQubeEnv('SonarQube') { // 'SonarQube' is the name of the SonarQube server configured in Jenkins
               sh "${env.SONAR_SCANNER_HOME}/bin/sonar-scanner"
             }
           }
         }
       }

       post {
         always {
           junit 'test-results/**/*.xml' // Adjust this path based on where Karma outputs its test results
           cleanWs()
         }
       }
     }
     ```

### Step 6: Review Results in SonarQube

1. **Access SonarQube Dashboard:**
   - Open your browser and navigate to `http://localhost:9000`.
   - Go to your project’s dashboard to review the analysis results, including code quality issues, code coverage, and other metrics.

### Example Project Structure

```
my-nodejs-project/
├── src/
│   └── index.js
├── spec/
│   └── index.spec.js
├── coverage/
│   └── lcov.info
├── package.json
├── sonar-project.properties
└── karma.conf.js
```

### Example `package.json`

```json
{
  "name": "my-nodejs-project",
  "version": "1.0.0",
  "scripts": {
    "test": "karma start karma.conf.js"
  },
  "devDependencies": {
    "jasmine": "^3.8.0",
    "karma": "^6.3.4",
    "karma-chrome-launcher": "^3.1.0",
    "karma-coverage": "^2.0.3",
    "karma-jasmine": "^4.0.1"
  }
}
```

By following these steps, you will have set up a complete pipeline that uses SonarQube to analyze your Node.js project, Jasmine and Karma for testing, and Jenkins for continuous integration. This setup ensures that your code quality is continuously monitored and maintained.
