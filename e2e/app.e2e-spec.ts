import { NgMigrationExamplePage } from './app.po';

describe('ng-migration-example App', () => {
  let page: NgMigrationExamplePage;

  beforeEach(() => {
    page = new NgMigrationExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
