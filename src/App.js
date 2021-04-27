import React, { useEffect, useState} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BooksList from './views/BooksList'
import SearchList from './views/SearchList'

const App = () => {

  const [books, setBooks] = useState([])
  const [book, setBook] = useState({})

  const booksIDS = books.map(book => book.id)

  useEffect(() => {
    BooksAPI.getAll()
    .then(returnedBooks => setBooks(returnedBooks))
  }, [])

  useEffect(() => {
    if(book.id){
      BooksAPI.update(book, book.shelf)
    }
  }, [book])

  const handleStatusChnage = (bookOnChange) => {
    setBook(bookOnChange[0])
    setBooks(prevState => prevState.filter(bk => bk.id !== bookOnChange[1].id).concat(bookOnChange[0]))
  }

  const searchBooks = (book) => {
    if(booksIDS.includes(book.id)){
      return books.filter(bk => bk.id === book.id)[0].shelf
    }
  }

  return (
    <div className="app">
      <Route path="/" exact>
        <BooksList searchBooks={searchBooks} handleStatusChnage={handleStatusChnage} books={books} />
      </Route>
      <Route path="/search">
        <SearchList searchBooks={searchBooks} handleStatusChnage={handleStatusChnage} books={books} />
      </Route>
    </div>
  )
}

export default App