import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'

const Section1 = ({ book }) => {
    const { collection, tags, subjects } = book;
    const collections = [
        { key: 'Tags', list: tags },
        { key: 'Subjects', list: subjects },
        { key: 'Collection', list: collection },
    ];

    const renderCollections = (col) => (
        <div className="collection-container">
            <ul>
                <li className='title-sm main'>{col.key}:</li>
                {col.list.map((key, i) => (
                    <li>
                        <span key={i} className="title-sm">{key}</span>
                    </li>
                ))}
            </ul>
        </div>
    )

    const setPrefix = (num) => {
        return num === 1 ? num + 'st' : num === 2 ? num + 'nd' : num === 3 ? num + 'rd' : num + 'th'
    }

    return (
        <div className="card-main">
            <nav>
                <Link to="/" className="btn">Catalog</Link>
            </nav>
            <div className="head">
                <p className='card-subtitle status'>{book.current_status}</p>
                <p className='title-sm price'>${book.original_price}</p>

                <span className="title-sm">isbn# {book.isbn}</span>
                <p className='card-tiile'>{book.title} </p>
                <p className='card-subtitle'>{book.subtitle} </p>
                {
                    book.authors.map((el, i) => {
                        return <span className="title-sm" key={i}>{el}</span>
                    })
                }
                {book.edition &&
                    <span className="title-sm"> {setPrefix(book.edition)} Edition</span>
                }
                <p className='title-sm'> &copy; {book.copyright_date} </p>

            </div>
            <div className="body">
                <span className="line-hr"></span>

                <p className="paragraph">{book.overview}</p>
                <br />
                {collections.map((el) => {
                    return renderCollections(el)
                })}
            </div>
        </div>
    )
}

export default Section1
