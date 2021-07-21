import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './components/booksList/BooksList'
import Search from './components/search/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    myBooks: [],
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    }
  }

  componentDidMount() {
    // Update the books in the store with the latest fetched books
    BooksAPI.getAll().then(books => {
      this.setState((currentState) => ({
        myBooks: books,
        shelves: {
          currentlyReading: books.filter(book => book.shelf === 'currentlyReading').map(book => book.id),
          wantToRead: books.filter(book => book.shelf === 'wantToRead').map(book => book.id),
          read: books.filter(book => book.shelf === 'read').map(book => book.id),
        }
      }));

    });
  }

  onUpdateShelves = (updatedShelves) => {
    this.setState({
      shelves: updatedShelves,
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? <Search /> : (
          <div className="list-books">
            <header className="list-books-title">
              <h1>MyReads</h1>
            </header>
            {this.state.myBooks &&
              <BooksList books={this.state.myBooks} shelves={this.state.shelves} onUpdateShelves={this.onUpdateShelves} />
             }
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
