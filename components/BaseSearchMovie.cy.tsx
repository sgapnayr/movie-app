import movies from '@/data/movies.json';

describe('BaseSearchMovie', () => {
  it('should display search results based on the input', () => {
    cy.get('[data-cy="search-input"]').type('Matrix');
    cy.get('[data-cy="search-results"]').should('contain', 'The Matrix');
  });

  it('should display all movies when input is cleared', () => {
    cy.get('[data-cy="search-input"]').type('Matrix').clear();
    cy.get('[data-cy="search-results"] .movie-title').should('have.length', movies.length);
  });
});
