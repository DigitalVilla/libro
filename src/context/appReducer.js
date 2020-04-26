import * as types from './types'
export default (state, action) => {

    switch (action.type) {
        case types.SET_BOOKS:
            return { ...state, books:action.payload, isFetching : false }
        case types.SET_ERROR:
            console.log("error: ", action.payload);
            return state


        default:
            return state;
    }

}