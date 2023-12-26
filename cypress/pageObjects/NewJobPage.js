import { pipeline} from "../fixtures/pom_fixtures/NewItemPage.json";
import ProjectConfigurationPage from "./ProjectConfigurationPage";

class NewJobPage {

    getInputItemName = () => cy.get('form #name')
    getTypeOfJobList = ()=> cy.get('#items')
    getTypeOfJobItem = ()=> cy.get('#items li span')
    getConfirmBtn = () => cy.get('#ok-button')



    typeItemName(jobName) {
        this.getInputItemName().type(jobName)
        return this;
    }


    selectItemType() {
        this.getTypeOfJobItem().then(($els)=> {
            const item = Cypress.$.makeArray($els).filter($el => $el.innerText == pipeline);
            return cy.wrap(item)
        })
        .click()
        return this;
    }

    clickConfirmBtn() {
        this.getConfirmBtn().click()
        return new ProjectConfigurationPage()
    }

}

export default NewJobPage;