# What is Playwright?

Playwright is a robust end-to-end testing and automation framework developed by Microsoft. It enables developers to automate web browsers, perform UI tests, and simulate user interactions. Playwright is designed to support multiple browsers including Chromium, Firefox, and WebKit, making it a versatile tool for testing across different browser environments.

### Key Features of Playwright

1. **Cross-Browser Automation**: Supports Chromium (Google Chrome), Firefox, and WebKit (Safari).
2. **Headless and Headful Modes**: Can run browsers in both headless mode (without GUI) and headful mode (with GUI).
3. **Browser Contexts**: Provides isolated browser sessions for parallel tests.
4. **Auto-Waiting**: Automatically waits for elements to be actionable before performing actions.
5. **Network Interception**: Can intercept and manipulate network requests and responses.
6. **Selectors Engine**: Supports various selectors (CSS, XPath, text, etc.).
7. **Emulation**: Can emulate devices, geolocation, permissions, and more.
8. **Screenshots and Videos**: Capable of capturing screenshots and recording videos of test runs.
9. **Extensible**: Integrates well with other testing frameworks and CI/CD pipelines.

### Setting Up Playwright with a Node.js Project

Here's a step-by-step guide to setting up and using Playwright in a Node.js project:

#### 1. Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

#### 2. Initialize a Node.js Project

Create a new directory for your project and initialize it with `npm`:

```sh
mkdir playwright-demo
cd playwright-demo
npm init -y
```

#### 3. Install Playwright

Install Playwright using npm:

```sh
npm install --save-dev @playwright/test
```

This will install Playwright along with the necessary browser binaries.

#### 4. Configure Playwright

You can create a configuration file to customize Playwright's behavior. Create a `playwright.config.js` file:

```js
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
```

#### 5. Write a Test Script

Create a directory for your tests, for example, `tests`, and add a test file `example.spec.js`:

```js
// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
```

#### 6. Run the Test

Add a script in `package.json` to run Playwright tests:

```json
"scripts": {
  "test": "playwright test"
}
```

Run the test using npm:

```sh
npm test
```

#### 7. Advanced Usage

- **Network Interception**: Mock network requests and responses.

  ```js
  test('network interception', async ({ page }) => {
    await page.route('**/*', route => {
      if (route.request().url().includes('example')) {
        return route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<h1>Mocked Response</h1>',
        });
      }
      route.continue();

# Using Playwright with a React Project

Integrating Playwright with a React project involves setting up a testing environment and writing tests to validate your React components and application behavior. Here's a detailed guide to doing this:

#### 1. Set Up a React Project

If you don't have an existing React project, you can create one using Create React App:

```sh
npx create-react-app playwright-react-demo
cd playwright-react-demo
```

#### 2. Install Playwright

Install Playwright in your React project:

```sh
npm install --save-dev @playwright/test
```

#### 3. Configure Playwright

Create a `playwright.config.js` file in the root directory of your project:

```js
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'http://localhost:3000', // Base URL of the React app
  },
  webServer: {
    command: 'npm start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
```

#### 4. Create Test Files

Create a `tests` directory in the root of your project and add a test file, for example, `example.spec.js`:

```js
// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  expect(title).toBe('React App');
});

test('check if header is rendered', async ({ page }) => {
  await page.goto('/');
  const header = await page.textContent('h1');
  expect(header).toBe('Welcome to React');
});
```

#### 5. Add Playwright Scripts to package.json

Modify your `package.json` to add Playwright scripts:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "test:e2e": "playwright test"
}
```

#### 6. Run the Tests

Start your React development server and run the Playwright tests:

```sh
npm run test:e2e
```

#### 7. Advanced Testing with React Components

For more advanced testing, such as interacting with form elements and capturing screenshots, you can expand your test scripts:

```js
// tests/advanced.spec.js
const { test, expect } = require('@playwright/test');

test('form interaction', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  const successMessage = await page.textContent('.success');
  expect(successMessage).toBe('Login successful!');
});

test('screenshot example', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'homepage.png', fullPage: true });
});
```

In this example, replace the form selectors and success message with the actual selectors and messages from your React application.

### Conclusion

By following these steps, you can effectively integrate Playwright into your React project for end-to-end testing. Playwright provides a powerful platform to ensure your application works correctly across different browsers and configurations.
