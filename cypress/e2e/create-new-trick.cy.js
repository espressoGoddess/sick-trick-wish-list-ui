describe('user should be able to add new trick', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", { fixture: 'tricks' });
    cy.visit('http://localhost:3000/')
  });

  it('should be able to add new trick', () => {
    cy.get('form').children().should('have.length', 5)
    .get(':nth-child(1) > select').select('Regular');
    cy.get('#name').type('popsicle flip');
    cy.get(':nth-child(3) > select').select('Rail');
    cy.get('#tutorial').type('https://www.linkedin.com');
    cy.get('button').contains('Send it!').click();

    cy.get('.tricks').children().should('have.length', 4)
    .get('.tricks > :nth-child(4)')
    .contains('Regular popsicle flip');
    cy.contains('Obstacle: Rail');
    cy.contains('Link to Tutorial:');
    cy.contains('https://www.linkedin.com');
  });
  
});