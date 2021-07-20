# Transaction Management Backend - Level 1

Your task is to **build a backend app** that **fulfills the [Transaction Management API](https://infra.devskills.app/transaction-management/api/3.1.0)** and **make the provided API tests pass**.

Please agree with your hiring team regarding the tech stack choice.

## Before you get started

### Import boilerplate

Follow [this link](https://docs.devskills.co/collections/85-the-interview-process/articles/342-importing-challenge-boilerplate) to get the boilerplate code for your tech stack to configure a minimal setup for running the E2E tests.

<details>
<summary>Alternatively, use the manual setup.</summary>

1. Update the `apiUrl` (where your backend runs) in [cypress.json](cypress.json).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app.

</details>

### Get familiar with the API

Follow [this link](https://infra.devskills.app/transaction-management/api/3.1.0) to find the API documentation. Feel free to try out a few requests to better understand how the API should work.

### Try running the API tests locally

```bash
npm install
npm run build # should build your app
npm run start # should start your app
npm run test
```

### What we expect from you

1. Make the provided API tests pass.
2. Keep server data in a [SQLite](https://www.sqlite.org/index.html) database. We want to see how you design the database schema and SQL queries.
3. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
4. Create a new pull request, but please **do not merge it**.
5. Await further instructions from the hiring team.

## Need help?

Start with [Troubleshooting](https://www.notion.so/Troubleshooting-d18bdb5d2ac341bb82b21f0ba8fb9546), and in case it didn't help, create a new GitHub issue. We'll get back to you.

## Time estimate

About **1-2 hours** depending on your experience level. But don't worry! There is no countdown. This number is for you to plan your time.

---

Made by [DevSkills](https://devskills.co).

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
