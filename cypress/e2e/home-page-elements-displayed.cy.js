describe('tricks and form should be displayed when visiting home page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", { fixture: 'tricks' });
    cy.visit('http://localhost:3000/')
  });

  it('passes', () => {

  })
})