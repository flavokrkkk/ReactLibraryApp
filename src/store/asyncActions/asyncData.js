import axios from "axios"
import { ADD_USERS } from "../userReducer"
import { FETCH_BOOKS } from "../bookReducer"

export const fetchUsers = (limit) => {
    return async function(dispatch) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?limit=${limit}`)
        return dispatch({type: ADD_USERS, payload: response.data})
    }
}

export const fetchMovies = () => {
    return async function(dispatch) {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=13a93c1fd5849e06472b790650212cbb')
        return dispatch({type: FETCH_BOOKS, payload: response.data.results})
    }
}
