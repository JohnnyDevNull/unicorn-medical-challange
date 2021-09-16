export const stackSearch = (fixture, keyword) => {
  const url = `https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=creation_date&site=stackoverflow&intitle=${keyword}`;
  cy.intercept('GET', url, { fixture }).as(`stackSearch${keyword}`);
}
