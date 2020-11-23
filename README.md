# Aura Code Challenge

This challenge will allow you demonstrate your knowledge and understanding of test creation, Selenium, and node.js.
It is intended to be familar, much like a test automation story that could come up on the job.
It is up to you to identity the behavior of the feature.

## The Story

**Create a series of tests for the 'CREATE AN ACCOUNT' feature of automationpractice.com**

- Selenium Chrome webdriver is already bootstrapped in `src/chromeDriver.js`
- Sample test is included in `src/sample/tests.js`
- Tests are executed via [https://jestjs.io/docs/en/getting-started](Jest)

### Acceptance Criteria

- design and define tests for the 'create an account' feature
- tests span both email address form and 'Your Personal Information' form
- tests include happy path and exceptions
- Selenium must be used
- tests pass in both headless/headful modes on Chrome at desktop resolution
- it is NOT necessary to account for any other browser or screen resolution
- 100% coverage of the feature is not required

## Suggestions

- Spend as much or as little time as you wish on this challenge.
- Many implementation details are up to you, be prepared to explain your decisions.
- Use any node packages you want, just remember we want to know what _you_ can do.
- Consider how you would structure your code for reusability.

## Getting started

- this bundle contains a git repository
- work locally, commit changes
- push to your own git service
- share the repository link with us

## Package Scripts

| command              | description                  |
| :------------------- | :--------------------------- |
| `npm run format:fix` | format files with "prettier" |
| `npm run test`       | execute tests with "jest"    |
