import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './components/booksList/BooksList'
import Search from './components/search/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
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

  onUpdateShelves = (bookData, shelfName) => {
    BooksAPI.update(bookData, shelfName).then(updatedShelves => {
      bookData.shelf = shelfName;

      this.setState({
        shelves: updatedShelves,
        myBooks: [...this.state.myBooks, bookData]
      });
    });

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search myBooks={this.state.myBooks} onUpdateShelves={this.onUpdateShelves} />
        )} />
        <Route path="/" exact render={() => (
          <div className="list-books">
            <header className="list-books-title">
              <h1>MyReads</h1>
            </header>
            <BooksList books={this.state.myBooks} shelves={this.state.shelves} onUpdateShelves={this.onUpdateShelves} />
            <Link to="/search" className="open-search" title="Search" />
          </div>

        )} />
      </div>
    )
  }
}

export default BooksApp
