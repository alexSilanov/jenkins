/// <reference types="cypress" />
describe('Jenkins icon', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Verify Jenkins icon redirection to the homepage', () => {
        cy.get('#jenkins-head-icon').click()
        cy.url().should('include', 'localhost')
    })
})