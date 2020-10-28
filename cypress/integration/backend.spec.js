const apiUrl = `${Cypress.env("apiUrl")}`

describe('Account Management Backend - Level 1', () => {
  
  it('updates account balance', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "7943f961-a733-43cf-ba3d-905a5856f6da"
      },
      body: {
        account_id: "a40bcc03-6f39-418c-ad0b-97e14f522ec1",
        amount: 7
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('returns current account balance', () =>{
    cy.request({
      method: 'GET',
      url: `${apiUrl}/balance/a40bcc03-6f39-418c-ad0b-97e14f522ec1`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.balance).to.eq(7)
    })
  })

  it('returns current account balance again', () =>{
    cy.request({
      method: 'GET',
      url: `${apiUrl}/balance/a40bcc03-6f39-418c-ad0b-97e14f522ec1`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.balance).to.eq(7)
    })
  })

  it('adds more amount to account', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "3bc387f1-f46e-45b1-9ab7-4f6840181f19"
      },
      body: {
        account_id: "a40bcc03-6f39-418c-ad0b-97e14f522ec1",
        amount: 13
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
  

  it('returns updated account balance', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/balance/a40bcc03-6f39-418c-ad0b-97e14f522ec1`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.balance).to.eq(20)
    })
  })

  it('deducts some amount from account', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "1f80bf52-5f0b-41d7-95f9-6e61a1734298"
      },
      body: {
        account_id: "a40bcc03-6f39-418c-ad0b-97e14f522ec1",
        amount: -10
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('returns deducted account balance', () =>{
    cy.request({
      method: 'GET',
      url: `${apiUrl}/balance/a40bcc03-6f39-418c-ad0b-97e14f522ec1`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.balance).to.eq(10)
    })
  })

  it('rejects wrong HTTP method', async () => {
    cy.request({
      method: 'PUT',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "417a48dd-b73e-45fc-9ee0-c5d97c46748f"
      },
      body: {
        account_id: "a40bcc03-6f39-418c-ad0b-97e14f522ec1",
        amount: 10
      }
    }).then((response) => {
      expect(response.status).to.eq(405)
    })
  })

  it('rejects unsupported media type', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/xml",
        "Transaction-Id": "59b2917e-6407-40eb-8fbf-287435fcd6f8"
      },
      body: {
        account_id: "a40bcc03-6f39-418c-ad0b-97e14f522ec1",
        amount: 10
      }
    }).then((response) => {
      expect(response.status).to.eq(415)
    })
  })

  it('rejects when no account_id', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "6eadf15c-fc8a-4584-b708-31a56df13563"
      },
      body: {
        amount: 7
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('rejects when no amount', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "a02beed9-c81f-4030-a868-b9cb308d961c"
      },
      body: {
        account_id: "a40bcc03-6f39-418c-ad0b-97e14f522ec1"
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('rejects when wrong account_id format', async () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/amount`,
      headers: {
        "Content-Type": "application/json",
        "Transaction-Id": "29b0370f-05c0-4d17-a406-3f825997b0f5"
      },
      body: {
        account_id: 10,
        amount: 7
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('returns not found when no account found', () =>{
    cy.request({
      method: 'GET',
      url: `${apiUrl}/balance/96a11d04-4a69-47be-9e40-923d962eb7b4`,
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})