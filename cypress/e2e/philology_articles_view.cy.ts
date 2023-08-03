// https://on.cypress.io/api
import articlesArray from "../../src/utils/philology/articles/articlesArray";

const slug = "/philology/articles";

describe('[articles] Philology', () => {
  it('visits /philology/articles slug and shows a list of published articles related to Philology', () => {
    cy.visit(slug);
    articlesArray.forEach(({ title, href }) => {
      cy.get('ul li').should('contains', title);
      cy.get('ul li a').should('have.attr', 'href').and('contains', `slug/${href}`);
    });
  });
});
