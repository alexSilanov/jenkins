/// <reference types="cypress"/>

describe('Jenkins Search Box', () => {
    it('AT_01.02_005 verify Search Box is visible on the home page', function () {
        cy.get('#searchform').should('be.visible').click().type('project')
        cy.get('#search-box-sizer').should('have.text', 'project')
    });

    it('AT_01.02_009 verify Search Box is visible on the New Item page', function () {
        cy.get('.task  a[href="/view/all/newJob"]').click()
        cy.get('#searchform').should('be.visible').click().type('project') 
    });

    it('AT_01.02_010 verify Search Box is visible on the People page', function () {
        cy.get('.task  a[href="/asynchPeople/"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')

    });

    it('AT_01.02_011 verify Search Box is visible on the Build History page', function() {
        cy.get('.task a[href="/view/all/builds"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')
    })
    it('AT_01.02_012 verify Search Box is visible on the Manage Jenkins page', function() {
        cy.get('.task a[href="/manage"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')
    })
    it('AT_01.02_013 verify Search Box is visible on the My Views page', function() {
        cy.get('.task a[href="/me/my-views"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')
    })
   
    it('AT_01.02_014 verify Search Box is visible on the Node Monitoring page', function() {
        cy.get('a[href="/computer/"]').click()
        cy.get('a[href="configure"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')
    })

    
    it('AT_01.02_015 verify Search Box is visible on the API page', function() {
        cy.get('a[href="api/"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')
    })

    it('AT_01.02_016 verify Search Box is visible on the User page', function() {
        cy.get('a[class="model-link"] span[class="hidden-xs hidden-sm"]').click()
        cy.get('#searchform').should('be.visible').click().type('project')
    })
});