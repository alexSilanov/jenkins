import NewItemPage from './NewItemPage';
import PipelinePage from "./PipelinePage";
import FreestyleProjectPage from './FreestyleProjectPage';


class MyViewPage {
  getNewItemSideMenuLink = () => cy.get('a[href$="my-views/view/all/newJob"]');
  getBreadcrumbMyViewsItem = () => cy.get('li:nth-child(5) a:nth-child(1)');
  getPipelineNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getFreestyleProjectNameLink = () =>  cy.get('a[href^="job/"].jenkins-table__link');
  getDashboardMyViewsLink = () => cy.get('#breadcrumbBar a[href="/user/admin/my-views/"]');

  clickNewItemSideMenuLink() {
    this.getNewItemSideMenuLink().click();
    return new NewItemPage();
  };

  clickPipelineNameLink(){
    this.getPipelineNameLink().click()
    return new PipelinePage();
};

clickFreestyleProjectNameLink(){
  this.getFreestyleProjectNameLink().click()
  return new FreestyleProjectPage();
};

}
export default MyViewPage;