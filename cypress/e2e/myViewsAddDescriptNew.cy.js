/// <reference types="cypress"/>

describe('My Views-Add Description',()=>{
    it('Add descriprions of my views',()=>{
        cy.get('a[href*="/me/my-views"]').click()
        cy.get('#description-link').should('be.visible').click()
        cy.get('.jenkins-input').click().type('funny test')
        cy.get('button[name="Submit"]').click()
        cy.get('div[id="description"]').should('be.visible').contains('funny test')
        cy.get('a[href="editDescription"]').should('be.visible')
    })
})

