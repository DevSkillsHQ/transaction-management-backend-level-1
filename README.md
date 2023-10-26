# Transaction Management Backend - Level 1

Your task is to build a backend app that allows the recording of financial transactions and viewing the transaction history.

It should implement the [Transaction Management API specification](https://infra.devskills.app/transaction-management/api/3.1.0), which is defined in the [Open API](https://www.openapis.org/) format.

Please agree with your hiring team regarding the tech stack choice.

## Additional requirements

- Do your best to make the [provided E2E tests](cypress/e2e/test.cy.js) pass.
- Keep server data in a [SQLite](https://www.sqlite.org/index.html) database. We want to see how you design the database schema and SQL queries.

## Getting started

<details>
  <summary>If you run into a problem</summary>

  Navigate to [our community on GitHub](https://github.com/orgs/DevSkillsHQ/discussions/categories/help) to get assistance.

</details>

<details>
  <summary>Import a starter project</summary>

  We have created a set of starter projects with different tech stacks to help you get started quickly.

  To import a starter project:

  1. Go to the "Actions" tab of your GitHub repository and select the "Setup boilerplate" workflow in the left side panel.
  2. In the "Run workflow" dropdown, select the desired boilerplate along with the branch name where you want the boilerplate to be imported (e.g., `implementation`) and click the "Run workflow" button (you can find all starter projects' definitions [here](https://help.alvalabs.io/en/articles/7972852-supported-coding-test-boilerplates)).

  After the workflow has finished, your selected boilerplate will be imported to the specified branch, and you can continue from there.

  > ⚠️ **Custom setup**
  > 
  > If you instead want to set up a custom project, complete the steps below to make the E2E tests run correctly:
  > 1. Update the `baseUrl` (where your frontend runs) in [cypress.config.js](cypress.config.js).
  > 2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app.
  
</details>

<details>
  <summary>Prepare for coding</summary>

  To get this repository to your local machine, clone it with `git clone`.

  Alternatively, spin up a pre-configured in-browser IDE by clicking on the "Code" tab in this repository and then "Create codespace on {branch_name}".

  ![CleanShot 2023-10-13 at 00 00 32@2x](https://github.com/DevSkillsHQ/transaction-management-fullstack-level-1/assets/1162212/598ff1ae-238d-4691-8b7c-eb2228fdefac)

</details>

<details>
  <summary>Running the E2E tests</summary>

  > ⚠️ Before executing the tests, ensure [Node](https://nodejs.org/en) is installed and your app is running.
  ```bash
  npm install
  npm run test
  ```

</details>

## Submitting your solution for review

1. Create a new `implementation` branch on this repository and push your code there.
2. Create a new pull request from `implementation` **without merging it**.
5. Document the tech decisions you've made by creating a new review on your PR ([see how](https://www.loom.com/share/94ae305e7fbf45d592099ac9f40d4274)).
6. Await further instructions from the hiring team.

## Time estimate

Between **1 - 3 hours** + the time to set up the project/environment (we suggest you to import one of the provided project starters to save time).

However, there is no countdown. The estimate is for you to plan your time.

---

Authored by [Alva Labs](https://www.alvalabs.io/).
