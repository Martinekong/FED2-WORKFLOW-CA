# Workflow repo for the CA

This project contains the codebase and test setup for my Workflow course assignment. It includes :

- End-to-end (E2E) testing with Playwright
- Unit testing with Vitest
- Code linting with ESLint
- Git hooks with Husky
- Code formatting with Prettier

## Installation

To install the dependencies, run:

```bash
npm install
```

## Start the Project

Serve the project locally with:

```bash
npm run start
```

This uses live-server and serves the site at http://localhost:5500.
This must be running before you run the E2E tests.

## Running Tests

### End-to-End Tests (Playwright)

Run the E2E tests using:

```bash
npm run test:e2e
```

To open the Playwright Test UI (useful for debugging):

```bash
npx playwright test --ui
```

To see e2e test report:

```bash
npx playwright show-report
```

### Unit Tests (Vitest)

Run the unit tests using:

```bash
npm run test:unit
```

## Linting and Formatting

Run ESLint:

```bash
npm run lint
```

Lint-staged and Prettier are also set up to auto-format and lint the code before commits.

## Environment Variables

The following environment variables are required:

```env
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

Create a .env file in the root of the project to define these:

```env
TEST_USER_EMAIL=your-test-email@stud.noroff.no
TEST_USER_PASSWORD=your-secret-password
```

**Important**: Do not commit your .env file. Make sure .env is listed in .gitignore.

## Git Hooks

Husky is configured to run linting and formatting checks before each commit. If needed, set up Husky by running:

```bash
npm run prepare
```
