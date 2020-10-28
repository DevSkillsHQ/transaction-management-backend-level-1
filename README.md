# Interview Assignment: Account Management Backend - Level 1

👋 Hi there!

In this interview assignment, your task is to build a backend service that implements a predefined API spec.

The API defines a set of operations for creating and reading account transactions. 

See the [API spec](api-specification.yml) to get the idea of how the service should work. 

## What's included 🗂
We've added the [Account Management API](api-specification.yml) specification defined in the Open API format and [Cypress](https://www.cypress.io/) test suites to validate the Backend.

Before running the tests, update the `apiUrl` (where your Backend runs) in [cypress.json](cypress.json), and then run your app.

Run the tests:
```shell script
yarn install # Install the required test dependencies
yarn run test # Run all tests
```

## What we're looking for ⭐️

- **Use a SQL database as the service datastore.** We want to see how you design your database schema and SQL queries for working with the service data.
- **Create a backend service that implements the provided API.** Make sure all predefined API tests pass. It will involve the following:
  - Handling invalid HTTP requests;
  - Creating new transactions;
  - Retreiving the current account balance.
- **Optimize the GET endpoints for speed.** When designing your service, ensure that the GET endpoints remain fast with the database growing in size.
- **Organize your code as a set of low-coupled modules**. Avoid duplication and extract re-usable modules where it makes sense, but don't break things apart needlessly. We want to see that you can create a codebase that is easy to maintain.
- **Document your decisions.** Extend this README.md with info about how to run your application along with any hints that will help us review your submission and better understand the decisions you made.

## How to submit your solution 📬
1. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) that respectively build and run your application. 
2. Commit and push your changes to a new branch called `implementation`. A new [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions/quickstart) run will trigger automatically based on the [predefined pipeline](.github/workflows/tests.yml). The pipeline will run the `build` and `start` scripts from above to spin up your application and run the predefined Cypress tests against it.
3. Make sure your latest build has succesfully passed (you should see a green checkbox in GitHub).
4. Create a Pull Request from `implementation`.

## What to expect next 👀

1. An engineer will do a code review of your Pull Request. They might ask questions that you'll need to answer, so please watch for GitHub notifications in your mailbox.
2. In the end, the engineer who did the code review will merge your Pull Request. That's when your assignment is over.

## FAQ ❓

- Q: What resources am I allowed to use?
  - A: This assignment simulates a real-world engineering task, so feel free to use any resources you'd typically use.
- Q: How much time should I spend?
  - A: Try not to spend more than 3 hours.
- Q: What if I get stuck?
  - A: Feel free to create a GitHub issue on this repository describing your problem.
  

---

Made by [DevSkills](https://devskills.co). 

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
