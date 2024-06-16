# Next.js Movie Search Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- **Movie List by Categories**: Displays a list of movies categorized by genres.
- **Search Functionality**: Allows users to search for movies by name.
- **Filter by Rating and Genre**: Users can filter movies by their ratings and genres.
- **Autocomplete**: Displays an autocomplete list of movies as the user types in the search input.
- **Recoil for State Management**: Uses Recoil to manage global state.

## Functional Requirements

- Initialize the movies array with the given data.
- When user clicks on the movie name search input, open autocomplete with the list of all movies.
- When user enters a search string in the movie name input, the autocomplete list should be updated based on the entered input.
- User should be able to set multiple or any desired ratings, and based on that, the autocomplete list will be filtered further.
- Similarly to desired rating filter, user should be able to filter the autocomplete list by genre(s).
- Browser JavaScript console (in Developer Tools) should not show any JavaScript errors.

## Data

The initial data for the movies is:

| Title              | Rating | Category |
| ------------------ | ------ | -------- |
| The Matrix         | 7.5    | Action   |
| Focus              | 6.9    | Comedy   |
| The Lazarus Effect | 6.4    | Thriller |
| Everly             | 5.0    | Action   |
| Maps to the Stars  | 7.5    | Drama    |

## Testing

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing.

### Running Cypress Tests

To open Cypress test runner:

```bash
npm run cypress:open
```

To run Cypress tests in headless mode:

```bash
npm run cypress:run
```

### Cypress Test Cases

The test cases cover:

- Displaying all movies when the input is focused.
- Displaying search results based on the input.
- Filtering results by rating.
- Filtering results by genre.
- Ensuring all movies are displayed when the input is cleared.
- Ensuring no JavaScript errors are present in the console.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Code Standards and Best Practices

- Follow React best practices: [React Best Practices](https://www.codeinwp.com/blog/react-best-practices/)
- Follow Object Calisthenics rules when appropriate: [Clean Code: Object Calisthenics](https://medium.com/@davidsen/clean-code-object-calisthenics-f6f4dec07c8b)

## Sandboxed Environment

You can view and run the project in a sandbox environment:

- [JSFiddle](https://jsfiddle.net/)
- [Stackblitz](https://stackblitz.com/)
- [CodeSandbox](https://codesandbox.io/)

Create a new project, copy your project files, and ensure all dependencies are added correctly to share your work online.

## Contact

For any questions or feedback, please contact me directly.
