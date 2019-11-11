import React from 'react'
import Book from './Book'
import api from './StubAPI'



function BookList() {

var bookList=api.books.map(book => <Book key={book.id} book={book}/>)
    return (
        <div>
            {
                bookList
            }
        </div>
    )
}


export default BookList


