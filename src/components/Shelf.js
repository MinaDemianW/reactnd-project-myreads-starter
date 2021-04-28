import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const Shelf = ({myBooks =[], books=[], name, title, handleStatusChnage, searchBookShelf}) => {


    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {books.filter(book => book.shelf === name)
                .map(book => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            handleStatusChnage={handleStatusChnage}
                            id= {book.id} 
                            shelf={book.shelf? book.shelf: searchBookShelf(book)}
                            imageLinks={book.imageLinks || {}} 
                            title= {book.title}
                            authors= {book.authors}
                        />
                    </li>
                ))}
            </ol>
            </div>
        </div>
    )
}

Shelf.propsTypes = {
    myBooks: PropTypes.array,
    books: PropTypes.array, 
    name: PropTypes.string, 
    title: PropTypes.string, 
    handleStatusChnage: PropTypes.func, 
    searchBooks: PropTypes.func
}

export default Shelf