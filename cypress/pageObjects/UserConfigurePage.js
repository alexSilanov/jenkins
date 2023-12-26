import UserProfilePage from "../pageObjects/UserProfilePage"

class UserConfigurePage {
    getInputFieldFullName = () => cy.get('input[name="_.fullName"]');
    getUserConfigSaveBtn = () => cy.get('button[name="Submit"]')


    typeFullNameInputField(name) {
        this.getInputFieldFullName().clear().type(name);
        return this;
    }

    clickUserConfigSaveBtn() {
        this.getUserConfigSaveBtn().click();
        return new UserProfilePage();
    }

}

export default UserConfigurePage;