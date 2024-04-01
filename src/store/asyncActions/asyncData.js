import axios from "axios"
import { ADD_USERS } from "../userReducer"
import { FETCH_BOOKS} from "../bookReducer"

export const fetchUsers = (limit = 10) => {
    return async function(dispatch) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?limit=${limit}`)
        return dispatch({type: ADD_USERS, payload: response.data})
    }
}

export const fetchMovies = (currentPage) => {
    return async function(dispatch) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
        return dispatch({type: FETCH_BOOKS, payload: response.data})
    }
}


export const fetchOneBook = async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
}


