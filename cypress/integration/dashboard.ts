import { stackSearch } from '../mocks/stack-search-mocks';

const waitForCalls = () => {
  cy.wait('@stackSearchAngular2');
  cy.wait('@stackSearchTypeScript');
  cy.wait('@stackSearchWeather');
};

const checkNavigation = () => {
  cy.contains('Hauptnavigation', );
  cy.contains('Dashboard');
  cy.contains('Search');
  cy.contains('Weiterführende Informationen');
  cy.contains('Hilfe');
};

const checkDashboard = () => {
  cy.get('.stack-list').should('have.length', 3);

  cy.get('.stack-list.TypeScript')
    .contains('TypeScript')
    .parent()
    .find('.stack-list-item')
    .should('have.length', 10);

  cy.get('.stack-list.Angular2')
    .contains('Angular2')
    .parent()
    .find('.stack-list-item')
    .should('have.length', 10);

  cy.get('.stack-list.Weather')
    .contains('Weather')
    .parent()
    .find('app-stack-list-item')
    .should('have.length', 5)
    .parent()
    .find('app-weather-data-item')
    .should('have.length', 5);
};

describe('root and dashboard page', () => {

  beforeEach(() => {
    stackSearch('stack-items-angular2.json', 'Angular2');
    stackSearch('stack-items-typescript.json', 'TypeScript');
    stackSearch('stack-items-weather.json', 'Weather');
  });

  it('Visits the / page', () => {
    cy.visit('/');
    waitForCalls();
    checkNavigation();
    checkDashboard();
  });

  it('Visits the /dashbord page', () => {
    cy.visit('/dashboard');
    waitForCalls();
    checkNavigation();
    checkDashboard();
  });
});
