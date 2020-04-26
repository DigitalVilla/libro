import React, { useReducer, createContext, useEffect } from 'react'
import appReducer from './appReducer'
import useFetch from './useFetch'
import * as types from './types'

const initialState = {
    books: [],
    error: null,
    isFetching: true
};

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const [response, isFetching, error] = useFetch('/data/books.json');
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        if (response) {
            setBooks()
        } else if (error) {
            setError();
        }
    }, [response, error])

    //ACTIONS 
    function setBooks() {
        dispatch({
            type: types.SET_BOOKS,
            payload: response
        })
    }

    function setError() {
        dispatch({
            type: types.SET_ERROR,
            payload: error
        })
    }

    return (
        <AppContext.Provider value={{
            books: state.books
        }}>
            {children}
        </AppContext.Provider>
    )
}

