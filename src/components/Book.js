import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Book = (props={authors:[]}) => {
    
    const [status, setStatus] = useState(props.shelf || "move")

    const handleChange = (evt) => {
        setStatus(evt.target.value)
        props.handleStatusChnage([{...props.book, shelf: evt.target.value}, props.book])
    }

    return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks.thumbnail})`}}></div>
            <div className="book-shelf-changer">
                <select value={status} onChange={handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors && props.authors.map(
                (author, index) => <div key={index}>{author}</div>
                )}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    handleStatusChnage: PropTypes.func,
    id: PropTypes.string,
    shelf: PropTypes.string,
    imageLinks: PropTypes.object, 
    title: PropTypes.string,
    authors: PropTypes.array
}

export default Book