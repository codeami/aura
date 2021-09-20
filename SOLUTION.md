# Aura Automation Challenge
## Challange Summary
This challenge will allow you demonstrate your knowledge and understanding of test creation, Selenium, and node.js.

- design and define tests for the 'create an account' feature
- tests span both email address form and 'Your Personal Information' form
- tests include happy path and exceptions
- Selenium must be used
- tests pass in both headless/headful modes on Chrome at desktop resolution

- Consider how you would structure your code for reusability.


## Solution Summary

### Components of a Customizable Composable Testing framework
- Continuous integration - Github Actions pipeline triggers Tests, shares results on each push.
    - AUT -  Application under test
    - AUT Tests- Leverage AUT Tests written to test the Solution itself.
- UI modelling- Composable Components/Pages' Objects' modelled per UI components
- Testing Framework - Jest
    - not from Xunit family
    - Fixtures: fixed, specific states of data (fixtures) that are test-local. helper functions such as: BeforeEach and afterEach - helps do work repeatedly for many tests, beforeAll and afterAll - if you only need to do setup once, at the beginning of a file.
    - Group fixtures: Allows defining a fixed, specific states of data for a group of tests (group-fixtures). This ensures specific environment for a given group of tests.
    - Test discovery
    - Matchers, test coverage, mocking, exceptions
    - Async event handling in jest test: -
        -  a. using single argument called done. Jest will wait until the done callback is called 'done()' before finishing the test.
        - b. Jest wait for Test if code inside test returns a promise 
        - c. using .resolves matcher in your expect statement, and Jest will wait for that promise to resolve


External 

### Approach 1 - 
Start from scratch using Page Object Library 




