const signup = {
  fillForm: user => {
    cy.get('#email').type(user.email)
    cy.get('#name').type(user.username)
    cy.get('#password').type(user.password, { log: false })
  }
}

module.exports = signup
