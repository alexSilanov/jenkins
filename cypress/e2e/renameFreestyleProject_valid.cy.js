/// <reference types="cypress"/>
describe('renameFreestyleProject_valid', () => {
    let projectName = "DemoJob";
    let newProjectName = "AnotherProject";

    beforeEach ('Prepare freeStyle Project', function () {
      cy.get(".task-link").eq(0).click();
      cy.get("#name").type(projectName);
      cy.get('.hudson_model_FreeStyleProject').click();
      cy.get('#ok-button').should('have.text', 'OK').click();
      cy.get('.setting-main  textarea  ').eq(0).type('test');
      cy.get('#bottom-sticker > div > button.jenkins-button.jenkins-button--primary')
      .click();

      cy.get('.jenkins-breadcrumbs__list-item > .model-link').eq(0).click();

      cy.get('td> a > span').should('have.text', projectName).realHover();
      cy.get('td> a > button').should('be.visible').click();
      cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a>span')
      .should('be.visible')
      .and('have.length', 6)
      .eq(5)
      .click();
  });
      it("AT_12.03.012 Rename project, new name is valid", () => {
      cy.get('input[name="newName"]').clear().type(newProjectName);
      cy.get('button[name="Submit"]').click();

      cy.get('div h1').contains(newProjectName);
      
    });

});