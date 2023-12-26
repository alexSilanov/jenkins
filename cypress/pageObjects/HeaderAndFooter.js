import UserConfigurePage from "../pageObjects/UserConfigurePage"

class HeaderAndFooter {
    getUserNameLink = () => cy.get('div.login a[href="user]');
    getUserDropDownBtn = () => cy.get('div.login a[href="/user/admin"] button');
    getUserConfigureMenu = () => cy.get('div.tippy-content a[href="/user/admin/configure"]')


    clickUserDropDownBtn() {
        this.getUserDropDownBtn().realHover().click({force: true})
        return this;

    }

    selectUserConfigureMenu() {
        this.getUserConfigureMenu().click()
        return new UserConfigurePage();
    }
}

export default HeaderAndFooter