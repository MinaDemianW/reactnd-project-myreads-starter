import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Shelf from '../components/Shelf'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'


const SearchList = ({books, handleStatusChnage, searchBooks}) => {
  
  const [foundBooks, setFoundBooks] = useState([])
  const [qurey, setQuery] = useState('')
  
  useEffect(() => {
    if(qurey.length >0){
      BooksAPI.search(qurey)
      .then(returnedBooks => setFoundBooks(returnedBooks))
    } else {
      setFoundBooks([])
    }
  }, [qurey])

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
                value={qurey}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <Shelf searchBooks={searchBooks} handleStatusChnage={handleStatusChnage} myBooks={books} books={foundBooks}/>
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