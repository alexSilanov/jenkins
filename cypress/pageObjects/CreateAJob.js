import NewJobPage from "./NewJobPage";

class CreateAJbob {
    getCreateAJobBtn = () => cy.get('#main-panel a[href="newJob"] span.trailing-icon')

    clickCreateAJobBtn() {
        this.getCreateAJobBtn().click();
        return new NewJobPage();
    }

}

export default CreateAJbob;