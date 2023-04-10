describe('tricks and form should be displayed when visiting home page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", { fixture: 'tricks' });
    cy.visit('http://localhost:3000/')
  });

  it('should have form on page', () => {
    cy.get('form').children().should('have.length', 5)
    .get(':nth-child(1) > select');
    cy.get('#name');
    cy.get(':nth-child(3) > select')
    cy.get('#tutorial');
  });
})