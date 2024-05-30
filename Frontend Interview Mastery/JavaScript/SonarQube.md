### SonarQube Overview

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
