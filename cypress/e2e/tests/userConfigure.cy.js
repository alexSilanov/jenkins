import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {userFullName} from "../../fixtures/pom_fixtures/userConfigurePage.json"


describe('userConfigure', function() {
    const header = new HeaderAndFooter();


    it('verify user can rename Fullname and the name is changed in user profile', function () {
        header
          .clickUserDropDownBtn()
          .selectUserConfigureMenu()
          .typeFullNameInputField(userFullName)
          .clickUserConfigSaveBtn()
          .trimUserPageHeaderName()
          .should('eq', userFullName)
    })
})