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

  it('should have tricks on page', () => {
    cy.get('.tricks').children().should('have.length', 3)
    .get('.tricks > :nth-child(1)')
    .contains('regular yikes');
    cy.contains('Obstacle: desk corner');
    cy.contains('Link to Tutorial:');
    cy.contains('https://www.javascriptforcats.com');

    cy.get('.tricks > :nth-child(2)')
    .contains('switch heely');
    cy.contains('Obstacle: slide');
    cy.contains('Link to Tutorial:');
    cy.contains('https://www.javascriptforcats.com');

    cy.get('.tricks > :nth-child(3)')
    .contains('regular backside beep boop');
    cy.contains('Obstacle: water fountain');
    cy.contains('Link to Tutorial:');
    cy.contains('https://www.javascriptforcats.com');

  });
})