import { RecoilRoot } from 'recoil';
import BaseRating from '../components/BaseRating';

describe('<BaseRating />', () => {
  beforeEach(() => {
    cy.mount(
      <RecoilRoot>
        <BaseRating />
      </RecoilRoot>
    );
  });

  it('initializes with "Any rating" selected by default', () => {
    cy.get('[data-cy=base-rating]').should('exist');
    cy.get('[data-cy=base-rating]')
      .contains('Any rating')
      .parent()
      .within(() => {
        cy.get('svg').should('exist');
      });
  });

  it('opens the rating dropdown on click', () => {
    cy.get('[data-cy=base-rating]').click();
    cy.get('[data-cy=search-results]').should('be.visible');
  });

  it('displays all ratings options in the dropdown', () => {
    cy.get('[data-cy=base-rating]').click();
    ['Any rating', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].forEach(rating => {
      cy.contains(rating).should('be.visible');
    });
  });

  it('selects a specific rating and shows the checkmark', () => {
    cy.get('[data-cy=base-rating]').click();
    cy.contains('5').click();
    cy.get('[data-cy=base-rating]').click(); // Re-open to verify selection
    cy.contains('5')
      .parent()
      .within(() => {
        cy.get('svg').should('exist');
      });
  });

  it('deselects "Any rating" when another rating is selected', () => {
    cy.get('[data-cy=base-rating]').click();
    cy.contains('5').click();
    cy.get('[data-cy=base-rating]').click(); // Re-open to verify selection
    cy.contains('Any rating')
      .parent()
      .within(() => {
        cy.get('svg').should('not.exist');
      });
  });

  it('re-selects "Any rating" when it is clicked after another rating', () => {
    cy.get('[data-cy=base-rating]').click();
    cy.contains('5').click();
    cy.get('[data-cy=base-rating]').click(); // Re-open to verify selection
    cy.contains('Any rating').click();
    cy.get('[data-cy=base-rating]').click(); // Re-open to verify selection
    cy.contains('Any rating')
      .parent()
      .within(() => {
        cy.get('svg').should('exist');
      });
  });

  it('does not show any JavaScript errors in the console', () => {
    cy.window().then(win => {
      cy.spy(win.console, 'error');
    });
    cy.get('[data-cy=base-rating]').click();
    cy.contains('5').click();
    cy.window().its('console.error').should('not.be.called');
  });
});
