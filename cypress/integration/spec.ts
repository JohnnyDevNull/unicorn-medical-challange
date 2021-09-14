describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Hauptnavigation', );
    cy.contains('Dashboard');
    cy.contains('Search');
    cy.contains('Weiterführende Informationen');
    cy.contains('Hilfe');
  });
});
