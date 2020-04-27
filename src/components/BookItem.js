import React from 'react'
import { Link } from '@reach/router'

export default function BookItem({ book }) {
    return (
        <li class="grid-item book-item">
            <Link to={`/book/${book.isbn}`} class="wrapping-link" href="#"></Link>
            <div class="book-item-wrapper">
                <div class="book-image-container" >
                    <span class="book-image" style={{ backgroundImage: `url('images/covers/${book.isbn}.jpg')` }}></span>
                </div>
                <div class="book-item-content">
                    <h3 class="item-title">{book.title}</h3>
                    <span class="item-excerpt">
                            &copy; {book.copyright_date} <br />
                            ISBN#: {book.isbn} <br />
                            Branch: {book.current_branch} <br />
                            Status: {book.current_status} <br />
                            Price: {book.original_price} <br />
                            Pages: {book.pages} <br />
                    </span>
                    <span class="more-info">View Book</span>
                </div>
            </div>
        </li>
    )
}
