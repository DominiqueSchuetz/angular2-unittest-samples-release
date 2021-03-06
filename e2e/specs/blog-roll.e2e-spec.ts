import { BlogRollE2E } from '../pageObjects/blog-roll.po';

describe('angular2-unittest-samples-release App', function () {
  let page: BlogRollE2E;

  beforeEach(() => {
    page = new BlogRollE2E();
  });

  it('should display message saying Simple Task Manager', () => {
    page.navigateToRoot();
    expect(page.getParagraphText()).toEqual('Simple Task Manager');
  });

  it('should have a tableclass on the page', () => {
    expect(page.getTheTableFromTemplate()).toBe(true);
  });

  it('should have a buttonclass on the page', () => {
    expect(page.isButtonClassThere()).toBe(true);
  });

  it('should getItBoth', () => {
    page.getItBoth().then((res) => {
      expect(res).toEqual('Edit Blog Entry');
    });
  });

  it('should set new title', () => {
    page.setNewBlogTitle();
    page.pressSaveButton().then((resText) => {
      expect(resText).toEqual('Green Trane');
    });
  });

  it('should have two tablerows', () => {
    page.deleteABlogEntry();
    page.getTheNumberOfTabelRows().then((numberOfTRs) => {
      expect(numberOfTRs).toBeGreaterThan(1);
    });
  });
});