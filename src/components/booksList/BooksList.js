import React from 'react';
import Book from '../book/Book';

function BooksList({ books, shelves, onUpdateShelves }) {
    return (
        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelves.currentlyReading.map(bookId => {
                            const bookData = books.find(book => book.id === bookId);
                            return (
                                <li key={bookId}>
                                    <Book bookData={bookData} onUpdateShelves={onUpdateShelves} />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelves.wantToRead.map(bookId => {
                            const bookData = books.find(book => book.id === bookId);
                            return (
                                <li key={bookId}>
                                    <Book bookData={bookData} onUpdateShelves={onUpdateShelves} />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelves.read.map(bookId => {
                            const bookData = books.find(book => book.id === bookId);
                            return (
                                <li key={bookId}>
                                    <Book bookData={bookData} onUpdateShelves={onUpdateShelves} />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default BooksList
