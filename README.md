# Interview Assignment: Account Management Backend - Level 1

Hi there! 👋

**Spoiler alert! 🚨** This is **not** your typical interview test where you spend your personal time and don't get anything back.

Regardless of how your interview process goes, you'll get the following two things:
- A great contribution to your dev portfolio by completing this assignment.
- Feedback on how well you did. The hiring team will use a calibrated evaluation rubric to assess your work, so they can share parts of it with you.

## Before writing any code, **please read this README carefully!** ⚠️
To save everyone's time, this assignment follows a specific structure which boils down to the following two things:

- Using automated tests to validate your submission.
- Assessing a predefined list of tech competences.

So to avoid wasting your time, please make sure to understand what's expected of your submission. 

If something is not clear, [ask a question](#last-hint-before-starting-%EF%B8%8F).

## How much time you'll need ⏳

Try not to spend more than **three hours**. Document everything that you haven't managed to complete.

## Last hint before starting ☝️

If you get stuck with something (e.g., tests don't pass in the pipeline, etc.), please describe your problem in a new GitHub issue on this repository. A human will help you. 🤚

## Finally, what you're going to build 👀

Your task is to build a backend service that implements a predefined API spec.

The API defines a set of operations for creating and reading account transactions. 

See this [API spec](api-specification.yml) to get the idea of how the service should function. 

## Boilerplate 🗂
We've added the [Account Management API](api-specification.yml) specification defined in the Open API format and [Cypress](https://www.cypress.io/) test suites to validate the Backend.

Before running the tests, update the `baseUrl` (where the `/ping` healthcheck is available) and `apiUrl` (where your Backend runs) in [cypress.json](cypress.json), and then run your app.

Run the tests:
```shell script
yarn install # Install the required test dependencies
yarn run test # Run all tests
```

## The assessment areas 🚩

- **Use a SQLite database as the service datastore.** We want to see how you design your database schema and SQL queries for working with the service data. We suggest using [SQLite](https://www.sqlite.org/index.html) as it doesn't require running a DB server, which simplifies running the tests in the pipeline.
- **Create a backend service that implements the provided API.** Make sure all predefined API tests pass. It will involve the following:
  - Handling invalid HTTP requests;
  - Creating new transactions;
  - Retreiving the current account balance.
- **Optimize the GET endpoints for speed.** When designing your service, ensure that the GET endpoints remain fast with the database growing in size.
- **Organize your code as a set of low-coupled modules**. Avoid duplication and extract re-usable modules where it makes sense, but don't break things apart needlessly. We want to see that you can create a codebase that is easy to maintain.
- **Document your decisions.** Extend this README.md with info about how to run your application along with any hints that will help us review your submission and better understand the decisions you made.

## How to submit your solution 📬
1. Update the `apiUrl` (where your Backend runs) in [cypress.json](cypress.json).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) that respectively build and run your application. **[See examples](examples.md)**.
3. Commit and push your changes to a new branch called `implementation`. The predefined automated tests will run in a new [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions/quickstart) build. The build will execute the `build` and `start` scripts from above to spin up your application and run the tests against it.
4. Make sure your latest build has successfully passed (you should see a green checkbox in GitHub).
5. Create a Pull Request from `implementation`.

## What to expect next 💡

1. An engineer will do a code review of your Pull Request. They might ask questions that you'll need to answer, so please watch for GitHub notifications in your mailbox.
2. In the end, the engineer who did the code review will merge your Pull Request. That's when your assignment is over.

## FAQ ❓

- Q: What resources am I allowed to use?
  - A: This assignment simulates a real-world engineering task, so feel free to use any resources you'd typically use.
- Q: How much time should I spend?
  - A: Try not to spend more than **three hours**. Document everything that you haven't managed to complete.
- Q: What if I get stuck?
  - A: Feel free to create a GitHub issue on this repository describing your problem.
  

---

Made by [DevSkills](https://devskills.co). 

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
