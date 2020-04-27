import React, { useContext, useState } from 'react'
import Filter from '../components/Filter'
import BookList from '../components/BookList'
import useSortedBooks from '../hooks/useSortedBooks'

export default () => {
    document.title = `Libro | Catalog`;
    const [
        books,
        options,
        filter,
        setFilter,
        category,
        setCategory,
        isAscending,
        setAscending
    ] = useSortedBooks()

    return (
        <div class="container">

            <header>
                <h1><img src="favicon.ico" alt="logo"/> LIBRO</h1>

                <Filter
                    options={options}
                    filter={filter}
                    setFilter={setFilter}
                    category={category}
                    setCategory={setCategory}
                    isAscending={isAscending}
                    setAscending={setAscending}
                />
            </header>
            <BookList books={books} />
        </div>
    )
}
