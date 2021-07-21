# MyReads App

Book Tracking App using React.js categorize your book.

This app is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it only uses React and [react-router-dom](https://reactrouter.com/web/guides/quick-start) as its dependencies.

## Features:
* The home page categorize the books to 3 sections (Currently Reading, Want to Read & Read) with ability to move any book to another section or selecting "none" if it is no longer needed in the reads list and it will be untracked.
* The search `/search` contains a search box to search for other books with the ability to move them to one of the home page sections.


## How To Use:
* install all project dependencies with `npm install`.
* start the development server with `npm start`.
* build code for production: `npm run build`.


## Folder Structure
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Index HTML file
└── src
    ├── components # App components.
    │   ├── books.js    # common component for the book.
    │   ├── BooksList.js # books list component to be rendered in home page `/`
    │   └── Search.js   # search component to be rendered in search page `/search`.
    ├── App.css # Styles for the whole app.
    ├── App.js # The root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # App's images and icons.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Index file used for React rendering on the DOM.
```
