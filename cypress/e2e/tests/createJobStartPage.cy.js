import CreateAJbob from "../../pageObjects/CreateAJob";


describe('test', function() {
    const createJob = new CreateAJbob();

    it('dava', function() {
        createJob
          .clickCreateAJobBtn()
          .typeItemName('test')
          .selectItemType()
          .clickConfirmBtn()
    })
})