import React from 'react'
import Shelf from '../components/Shelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BooksList =  ({books, handleStatusChnage, searchBookShelf}) => {
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf 
                    books={books}
                    handleStatusChnage={handleStatusChnage}
                    searchBookShelf={searchBookShelf}
                    name="currentlyReading" 
                    title="Currently Reading"
                    />
                    <Shelf 
                    books={books}
                    handleStatusChnage={handleStatusChnage}
                    searchBookShelf={searchBookShelf}
                    name="wantToRead" 
                    title="Want to Read"
                    />
                    <Shelf 
                    books={books}
                    handleStatusChnage={handleStatusChnage}
                    searchBookShelf={searchBookShelf} 
                    name="read" 
                    title="Read"
                    />
                </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                  <button>Add a book</button>
              </Link>
            </div>
          </div>
    )
}

BooksList.propTypes = {
  books: PropTypes.array, 
  handleStatusChnage: PropTypes.func, 
  searchBooks: PropTypes.func
}

export default BooksList