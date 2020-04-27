import React, { useState, useEffect, useReducer, useContext } from 'react'
import { AppContext } from '../context/ContextProvider'

const categories = [
    "title",
    "copyright_date",
    "current_branch",
    "current_status",
    "original_price",
    "isbn",
    "pages"
]

const options = categories.map((key) => {
    const value = key.split('_').map(el => el.substr(0, 1).toUpperCase() + el.substring(1)).join(' ') 
    return { key, value}
})

export default function useSortedBooks() {
    const [category, setCategory] = useState('title')
    const [isAscending, setAscending] = useState(true)
    const [filter, setFilter] = useState('')
    const { books } = useContext(AppContext)
    

    const sortList = () => {
        let arr = []

        for (const key in books) {
            arr.push(books[key])
        }

        arr = arr.filter((item) =>
            item[category].toString().toLowerCase().includes(filter.toLowerCase()),
        )

        arr.sort((a, b) => {
            let x = a[category]
            let y = b[category]

            if (typeof a[category] === "string") {
                x = a[category].toLowerCase()
                y = b[category].toLowerCase()
            }

            if (!isAscending) {
                return (x > y) ? -1 : (x < y) ? 1 : 0
            }
            return (x < y) ? -1 : (x > y) ? 1 : 0
        })

        return arr
    }

    return [sortList(), options, filter, setFilter, category, setCategory, isAscending, setAscending]
}