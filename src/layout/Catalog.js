import React, { useContext, useState } from 'react'
import { AppContext } from '../context/ContextProvider'
import Filter from '../components/Filter'
import BookItem from '../components/BookItem'

export default () => {
    const [category, setCategory] = useState('title')
    const [filter, setFilter] = useState('')
    const { books } = useContext(AppContext)

    const sortBooks = (filter = '', category = 'title', descending = false) => {
        let arr = []

        // map object into array
        for (const key in books) {
            arr.push(books[key])
        }

        // Sort by lastname
        arr = arr.filter((item) =>
            item[category].toString().toLowerCase().includes(filter.toLowerCase()),
        )
        arr.sort((a, b) => {
            let x = a[category].toLowerCase()
            let y = b[category].toLowerCase()
            if (descending) {
                return (x > y) ? -1 : (x < y) ? 1 : 0
            }
            return (x < y) ? -1 : (x > y) ? 1 : 0
        })

        return arr
    }

    return (
        <div>
            {/* <Filter
                title={title}
                searchTerm={searchTerm}
                onClear={this.clearSearch}
                onChange={this.updateSearchTerm}
            /> */}
            <ul>
                {
                    sortBooks().map((book) => {
                        return <li key={book.isbn}> {book.title} {book.copyright_date}</li>
                    })
                }
            </ul>
        </div>
    )
}
