👋 Hi there!

In this interview challenge, you'll build a backend service that implements the Account Management API. The consumers of this API will use it to amend/fetch balances of different accounts.

Find the API specification in [here](api-specification.yml).

There is also a test suite that defines different scenarios for validating the functionality of the service. Find it under [api-tests.json](api-tests.json). Run with:
```shell script
npm install -g newman
newman run api-tests.json --reporters cli,json
``` 

### ☝ What we're trying to achieve here
The main goal of this challenge is to give you a chance to demonstrate your software engineering skills. In particular, your understanding of nuances when building a stateful REST API service.

### ℹ️ How to submit your solution?
Start with cloning this repository and then follow this checklist that will help you ensure that everything is in place:

 - [ ] I've built a backend application that implements the Account Management API.
 - [ ] The tests in [api-tests.json](api-tests.json) pass.
 - [ ] I've saved a copy of a successful [api-tests.json](api-tests.json) run under the `./newman/` directory.
 - [ ] I've created all other tests I find necessary.
 - [ ] The service stores data in a SQL database.
 - [ ] The service datastore remains strongly consistent at any point in time.
 - [ ] The performance of the service does not deteriorate with datastore growth.
 
 Whenever you're done, push your changes and create a [Pull Request in GitHub](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). 
 
 Another engineer will do a code review. And they might ask you a couple of questions, so watch out. 👀

 **As soon as your code reviewer merged your PR, then your interview is considered completed.** 😌
 
 ### 🤔 FAQ
 * Q: What resources am I allowed to use?
   * A: This assignment simulates a real-world engineering problem, so feel free to use any resources you'd normally use.
 * Q: How much time do I have?
   * A: Based on our data, for someone who's seen this assignment for the first time, it'd take them at most three hours to complete. Anyway, we'd appreciate it if you submitted your implementation within seven days since you got an invite. 
 * Q: What if I get stuck?
   * A: Feel free to [create an issue in GitHub](https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue) with the description of your problem.

---
Baked with ❤️ by [DevSkills](https://devskills.co).
