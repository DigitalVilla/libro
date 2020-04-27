import React, { useContext } from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import { AppContext } from '../context/ContextProvider'

const BookSingle = React.memo((props) => {
    const { books } = useContext(AppContext)
    const book = books[props.id + '']
    document.title = `Libro | ${book.title}`;


    return book ? (
        <main className="book-single">
            <div className="container-wide">
                <Section1 book={book} />

                <div className="card-secondary">
                    <Section2 book={book} />
                    <Section3 book={book} />
                    <Section4 book={book} />
                </div>

            </div>
        </main>
    ) : (
            <p>Loading...</p>
        )
})

export default BookSingle