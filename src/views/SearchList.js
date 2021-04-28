import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Shelf from '../components/Shelf'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'


const SearchList = ({books, handleStatusChnage, searchBookShelf}) => {
  
  const [foundBooks, setFoundBooks] = useState([])
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    if(query.length >0){
      BooksAPI.search(query)
      .then(returnedBooks => setFoundBooks(returnedBooks))
    } else {
      setFoundBooks([])
    }
  }, [query])

  const handleChange = (evt) => {
    setQuery(evt.target.value)
  }

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <Shelf 
                searchBookShelf={searchBookShelf} 
                handleStatusChnage={handleStatusChnage} 
                myBooks={books} 
                books={foundBooks.constructor === Array ? foundBooks : []}
                />
              </ol>
            </div>
        </div>
    )
}

SearchList.propTypes = {
  books: PropTypes.array, 
  handleStatusChnage: PropTypes.func, 
  searchBooks: PropTypes.func
}

export default SearchList