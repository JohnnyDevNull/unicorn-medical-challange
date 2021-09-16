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

  it('Should display a stack-item correctly', () => {
    cy.visit('/dashboard');
    waitForCalls();

    cy.get('.stack-list.TypeScript .stack-list-item:first')
      .contains('Views: 3')
      .parent().contains('Answers: 0')
      .parent().contains('Created: Sep 15, 2021')
      .closest('.stack-list-item')
      .contains('Socket.io + TypeScript: Socket.io not listening for new connections')
      .closest('.stack-list-item').contains('(...read more)')
      .closest('.stack-list-item').contains('node.js')
      .closest('.stack-list-item').contains('typescript')
      .closest('.stack-list-item').contains('express')
      .closest('.stack-list-item').contains('sockets')
      .closest('.stack-list-item').contains('socket.io');
  });

  it('Should display a weather-item correctly', () => {
    cy.visit('/dashboard');
    waitForCalls();

    cy.get('.stack-list.Weather .weather-item:first')
      .contains('Datum:')
      .closest('.weather-item').contains('Zeit:')
      .closest('.weather-item').contains('Temp. A.:')
      .closest('.weather-item').contains('Temp. 3:')
      .closest('.weather-item').contains('Feuchte A.:')
      .closest('.weather-item').contains('Luftdruck:')
      .closest('.weather-item').contains('Regen:')
      .closest('.weather-item').contains('Wind:')
      .closest('.weather-item').contains('Richtung:')
      .closest('.weather-item').contains('Helligkeit:');
  });
});
