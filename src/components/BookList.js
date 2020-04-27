import React from 'react'
import BookItem from '../components/BookItem'

export default React.memo(function BookList({ books }) {
    return (
        <ul class="grid-row">
            {
                books.map((book) => {
                    return <BookItem key={book.isbn} book={book} />
                })
            }
        </ul>
    )
})
