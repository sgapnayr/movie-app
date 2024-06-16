import { RecoilRoot } from 'recoil';
import BaseSearchMovie from './BaseSearchMovie';
import moviesData from '../data/movies.json';
import { selectedMovieState } from '@/atoms/movies';

describe('<BaseSearchMovie />', () => {
  beforeEach(() => {
    cy.mount(
      <RecoilRoot>
        <BaseSearchMovie />
      </RecoilRoot>
    );
  });

  it('initializes with the given movie data', () => {
    cy.get('[data-cy=search-input]').should('exist');
  });

  it('opens autocomplete with the list of all movies on input click', () => {
    cy.get('[data-cy=search-input]').click();
    moviesData.forEach(movie => {
      cy.contains(movie.title);
    });
  });

  it('updates the autocomplete list based on entered input', () => {
    cy.get('[data-cy=search-input]').type('Matrix');
    cy.contains('The Matrix');
    cy.get('[data-cy=movie-item]').should('not.contain', 'Focus');
  });

  it('shows the correct number of movies for a common search term', () => {
    cy.get('[data-cy=search-input]').type('The');
    cy.get('[data-cy=movie-item]').should('have.length', 3);
  });

  it('clears the input and resets the movie list', () => {
    cy.get('[data-cy=search-input]').type('Matrix');
    cy.contains('The Matrix');
    cy.get('[data-cy=search-input]').clear();
    moviesData.forEach(movie => {
      cy.contains(movie.title);
    });
  });

  it('shows no movies when the search term matches no titles', () => {
    cy.get('[data-cy=search-input]').type('NonExistentMovieTitle');
    cy.get('[data-cy=movie-item]').should('have.length', 0);
  });

  it('does not show any JavaScript errors in the console', () => {
    cy.window().then(win => {
      cy.spy(win.console, 'error');
    });
    cy.get('[data-cy=search-input]').type('Matrix');
    cy.window().its('console.error').should('not.be.called');
  });
});
