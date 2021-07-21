import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from "../BooksAPI"
import Book from './Book'

class Search extends Component {
  state = {
    booksResults: [],
  }

  onQueryChange = async (evt) => {
    const queryText = evt.target.value;
    const searchResults = queryText
      ? await BooksAPI.search(queryText.toLowerCase()).catch((error) =>
          console.log(error)
        )
      : [];

    this.setState({
      booksResults: (searchResults.length) ? searchResults : []
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" title="Back to Home" />
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.onQueryChange} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksResults.map(bookResult => {
              const bookData = this.props.myBooks.find(book => book.id === bookResult.id) || bookResult;
              return (
                <li key={bookResult.id}>
                  <Book bookData={bookData} onUpdateShelves={this.props.onUpdateShelves} />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
