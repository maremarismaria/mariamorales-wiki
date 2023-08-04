// https://on.cypress.io/api
import articlesArray from "../../../../src/db/utils/engineering/articles/articlesArray";

const slug = "/engineering/articles";

describe('[articles] Engineering', () => {
  it('visits /engineering/articles slug and shows a list of published articles related to Engineering', () => {
    cy.visit(slug);
    articlesArray.forEach(({ title, href }) => {
      cy.get('ul li').should('contains', title);
      cy.get('ul li a').should('have.attr', 'href').and('contains', `${slug}/${href}`);
    });
  });
});
