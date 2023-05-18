describe('Folder | Delete created folder', () => {
    it('AT_15.04.004 | Folder | Delete created folder', () => {

        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type('newFolder')
        cy.get('span.label').contains('Folder').click()
        cy.get('#ok-button').click()
        cy.get('#bottom-sticker').contains('Save').click()

        cy.url().should('include', '/job/newFolder/')
        cy.get('span.task-link-text').contains('Delete Folder').click({ force: true })
        cy.get('#main-panel button[name="Submit"]').contains('Yes').click()
        cy.url('http://localhost:8080/')

    })
})

