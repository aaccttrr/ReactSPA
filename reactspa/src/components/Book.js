import React from 'react'
import './Book.css'

function Book({book}) {
    return (
        <div className = 'bookStyle'>
            <h2>{book.name}</h2>
            <h3>Number of pages: {book.pages}</h3>
            <h3>Genre: {book.genre}</h3>
        </div>
    )
}

export default Book