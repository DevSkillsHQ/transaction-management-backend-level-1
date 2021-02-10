# Account Management Backend - Level 1

### The task 🧩

Your task is to build a backend service that implements the [Account Management API](api-specification.yml). This API defines a set of operations for creating and reading account transactions. You can use [editor.swagger.io](https://editor.swagger.io/) to visualize the spec.

### What we expect from you ⏳

- **Commit your code to a new branch called `implementation`**.
- **Make the provided API tests pass**. We added a set of API tests that run every time you push to a remote branch other than `master`/`main`. See the [instructions below](#running-the-api-tests-locally-%EF%B8%8F) covering how to run them locally.
- **Use an SQLite database as the service datastore.** We want to see how you design the database schema and SQL queries for working with the service data. Please use [SQLite](https://www.sqlite.org/index.html) as a DB engine.
- **Optimize the GET endpoints for speed.** When designing your service, ensure that the GET endpoints remain fast with the database growing in size.
- **Organize your code as a set of low-coupled modules**. Avoid duplication and extract re-usable modules where it makes sense, but don't break things apart needlessly. We want to see that you can create a codebase that is easy to maintain.
- **Document your decisions.** Extend this README.md with info about how to run your application along with any hints that will help us review your submission and better understand the decisions you made.

### Before you get started ⚠️

Configure your repository. You have 2 options:

1. [Import boilerplate](https://docs.devskills.co/collections/85-the-interview-process/articles/342-importing-challenge-boilerplate).
2. Alternatively, use the manual setup:
  1. Update the `apiUrl` (where your app will run) in [cypress.json](cypress.json).
  2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app. **[See examples](https://www.notion.so/devskills/Backend-78f49bea524148228f29ceb446157474)**.

### Running the API tests locally ⚙️

* Run `npm install`.
* Run your app.
* Run the tests with `npm run test`.

### When you're done ✅

1. Create a Pull Request from the `implementation` branch.
2. Answer the questions you get on your Pull Request.

**If you don't have enough time to finish**, push what you got and describe how you'd do the rest in a `.md` file.

### Need help? 🤯

Start with [Troubleshooting](https://www.notion.so/Troubleshooting-d18bdb5d2ac341bb82b21f0ba8fb9546), and in case it didn't help, create a new GitHub issue. A human will help you.

### Time estimate ⏳

About **3 hours**.

---

Made by [DevSkills](https://devskills.co).

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
