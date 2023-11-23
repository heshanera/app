# Client App

## Table of Contents
- [Directory Structure](#directory-structure)
- [Changelog](#changelog)
- [Getting Started](#getting-started)

## Directory Structure
```
client/
|-- public/
|   |-- index.html
|-- src/
|   |-- components/
|   |   |-- ArticleCard/            # Product card component for the grid
|   |   |-- EmptyView/              # Component to display when a view is empty
|   |   |-- Footer/                 # Footer component
|   |   |-- Header/                 # Header component
|   |   |-- LanguageSelector/       # Component for selecting the language
|   |   |-- Placeholder/            # Placeholder component for loading indicator
|   |   |-- Search/                 # Search component
|   |-- constants/
|   |-- hooks/
|   |   |-- useGraphqlRequest.ts    # Making GraphQL requests
|   |   |-- useLocale.tsx           # Managing locale settings
|   |   |-- useProductFilter.ts     # Filtering product data
|   |   |-- useTheme.tsx            # Managing theme settings
|   |-- locales/
|   |-- modules/
|   |   |-- ProductList/            # Module for managing the product list page
|   |-- services/                   # Service files for handling GraphQL queries
|   |-- types/                      # TypeScript type definitions
|   |-- utils/                      # Utility functions and helper modules
|-- App.test.tsx
|-- App.tsx                         # Main App component
|-- index.css
|-- index.tsx
|-- setupTests.ts                   # Configuration for setting up tests
|-- style.tsx
```


## Changelog
#### Enhancements
- Added linting and prettier
- Styling
    - Integrated styled components for styling
    - Theme Provider
- New graphql API client
    - Integrated `graphql-request`
    - Data fetching hook
- Updated app directory structure
- Unit Tests
#### New Functionalities
- Product Card
    - Multiple product images with selectable thumbnails
- Localization functionality
    - Locale provider
- Product filter functionality by name
    - Product filter hook
- Loading Screen
    - Placeholder view component
- React router integration for page navigation

## Getting Started
#### Installing
```shell
npm install
npm start
```

#### running unit tests
```
npm run test
```

#### prettier format
```
npm run format
```