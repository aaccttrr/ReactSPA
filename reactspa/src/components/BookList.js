import React from 'react'
import Book from './Book'

function BookList() {
    const books=[
        {
            id:1,
            name:'1984',
            pages:200,
            genre:'Dystopian'
        },
        {
            id:2,
            name:'Good Omens',
            pages:300,
            genre:'Comedy'
        },
        {
            id:3,
            name:'Frankenstein',
            pages:150,
            genre:'Horror'
        }
    ]
const bookList=books.map(book => <Book key={book.id} book={book}/>)
    return (
        <div>
            {
                bookList
            }
        </div>
    )
}

export default BookList
