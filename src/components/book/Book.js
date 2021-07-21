import React from 'react';

function Book({ bookData, onUpdateShelves }) {

    const onShelfChange = (evt) => {
        onUpdateShelves(bookData, evt.target.value);
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ backgroundImage: `url("${bookData.imageLinks && bookData.imageLinks.thumbnail}")` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={onShelfChange} defaultValue={bookData.shelf || 'none'}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookData.title}</div>
            <div className="book-authors">{bookData.authors && bookData.authors.join(', ')}</div>
        </div>
    );
}

export default Book
