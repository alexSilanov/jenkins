/// <reference types="cypress"/>
import myViewsAddDescr from "../fixtures/myViewsAddDescr.json"
describe('<My Views > Add description',() => {
    it ('<My Views Add description>',function(){
        cy.contains('My Views').click() 
        cy.get('#description-link').click()
        cy.get('.jenkins-input').type('description')
        cy.get('.jenkins-button--primary').click()
    })
    
    it('Add descriprions of my views',()=>{
        cy.get('a[href*="/me/my-views"]').click()
        cy.get('#description-link').should('be.visible').click()
        cy.get('.jenkins-input').click().type(myViewsAddDescr.describeText)
        cy.get('button[name="Submit"]').click()
        cy.get('#description').should('be.visible').contains(myViewsAddDescr.describeText)
        cy.get('a[href="editDescription"]').should('be.visible')
    })
})





