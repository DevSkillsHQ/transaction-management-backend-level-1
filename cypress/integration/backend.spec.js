// DO NOT CHANGE THIS FILE!

const apiUrl = `${Cypress.env("apiUrl")}`

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

describe('Transaction Management Backend - Level 1', () => {

  it('Provides a functional healthcheck', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/ping`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Can create and read transactions and accounts with positive amounts', () => {
    const accountId = uuid()
    let transactionId
    cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        account_id: accountId,
        amount: 7
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.transaction_id).to.not.be.undefined
      transactionId = response.body.transaction_id
      cy.request({
        failOnStatusCode: false,
        method: 'GET',
        url: `${apiUrl}/transactions/${transactionId}`,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.transaction_id).to.eq(transactionId)
        expect(response.body.account_id).to.eq(accountId)
        expect(response.body.amount).to.eq(7)
      })
    }).request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/accounts/${accountId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.account_id).to.eq(accountId)
      expect(response.body.balance).to.eq(7)
    })
  })

  it('Can create and read transactions and accounts with negative & zero amounts', () => {
    const accountId = uuid()
    let transactionId

    cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        account_id: accountId,
        amount: 4
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.transaction_id).to.not.be.undefined
      transactionId = response.body.transaction_id
    }).request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/accounts/${accountId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.account_id).to.eq(accountId)
      expect(response.body.balance).to.eq(4)
    }).request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        account_id: accountId,
        amount: -3
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.transaction_id).to.not.be.undefined
      transactionId = response.body.transaction_id
    }).request({ // read account balance
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/accounts/${accountId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.account_id).to.eq(accountId)
      expect(response.body.balance).to.eq(1)
    }).request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        account_id: accountId,
        amount: 0
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.transaction_id).to.not.be.undefined
      transactionId = response.body.transaction_id
    }).request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/accounts/${accountId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.account_id).to.eq(accountId)
      expect(response.body.balance).to.eq(1)
    })
  })

  it('Can handle requests for non-existent accounts and transactions', () => {
    const accountId = uuid()
    const transactionId = uuid()

    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/accounts/${accountId}`,
    }).then((response) => {
      expect(response.status).to.eq(404)
    }).request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/transactions/${transactionId}`,
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Can handle invalid requests', () => {
    const accountId = uuid()
    cy.request({
      failOnStatusCode: false,
      method: 'PUT', // wrong method
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        account_id: accountId,
        amount: 10
      }
    }).then((response) => {
      expect(response.status).to.eq(405)
    }).request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/xml", // wrong Content-Type
      },
      body: {
        account_id: accountId,
        amount: 10
      }
    }).then((response) => {
      expect(response.status).to.eq(415)
    }).request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: { // missing account_id
        amount: 7
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    }).request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: { // missing amount
        account_id: accountId
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    }).request({
      failOnStatusCode: false,
      method: 'POST',
      url: `${apiUrl}/transactions`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        account_id: 10, // bad format
        amount: 7
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

})
