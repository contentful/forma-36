describe('Dropdown', () => {
  before(() => {
    cy.visitStorybook();
  });

  beforeEach(() => {
    cy.loadStory('Components/Dropdown', 'Default');
  });

  it('should exist', () => {
    cy.findByTestId('cf-ui-dropdown');
  });
});
