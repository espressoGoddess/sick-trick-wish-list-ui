describe('when data is put into the form, the value is reflected in that form input', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", { fixture: 'tricks' });
    cy.visit('http://localhost:3000/')
  });

  it('should be able to type into form and value should be the same as what is typed', () => {
    cy.get('form').children().should('have.length', 5)
    .get(':nth-child(1) > select').select('Regular');
    cy.get(':nth-child(1) > select').should('have.value', 'Regular');

    cy.get('#name').type('popsicle flip');
    cy.get('#name').should('have.value', 'popsicle flip');

    cy.get(':nth-child(3) > select').select('Rail');
    cy.get(':nth-child(3) > select').should('have.value', 'Rail');
    
    cy.get('#tutorial').type('https://www.linkedin.com');
    cy.get('#tutorial').should('have.value', 'https://www.linkedin.com');

  });

})