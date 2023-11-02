import { faker } from '@faker-js/faker';

describe('Mattermost - Signup', () => {
  const user = {}

  beforeEach(() => {
    cy.visit('https://www.kidstok.com.br/login')

    user.login = "979.658.610-03"
    user.fullName = faker.name.fullName()
    user.email = faker.internet.email()
  })

  context('Nor Page Object neither GUI custom commands', () => {
    it.only('fills the form', () => {
      cy.get('#login').type(user.login)
      cy.get('#nome-completo').type(user.fullName)
      cy.get('#email-pessoa-fisica').type(user.email, { log: false })
    })
  })

  context('Page Object', () => {
    const signupPage = require('../pageObjects/signup')

    it('fills the form', () => {
      signupPage.fillForm(user)
    })
  })
  
  context('GUI custom commands', () => {
    it('fills the form', () => {
      cy.fillSignupForm(user)
    })
  })  
})
