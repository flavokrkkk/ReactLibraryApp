import axios from "axios"
import { useAction } from ".."


const {
        addUserAction,
        fetchBooksLoadingAction,
        fetchBooksAction,
        fetchBooksErrorAction,
        getOneBookAction
        } = useAction()

export const fetchUsers = (limit = 10) => {
    return async function() {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
                params: {_limit: limit}
            })
            return addUserAction(response.data)
        } catch (err) {
            console.log(err)
        }
        
    }
}

export const fetchMovies = (currentPage) => {
    return async function() {
        try {
            fetchBooksLoadingAction()
            //Имитация идентификатора загрузки
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {_page: currentPage}
            })
            setTimeout(() => {
            fetchBooksAction(response.data)
            }, 100)
        } catch (err) {
            fetchBooksErrorAction(`Произошла внешняя ошибка ${err}!`)
        }
        
    }
}


export const getOneBook = (id) => {
    return async function() {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            getOneBookAction(response.data)
        } catch (err) {
            console.log(err)
        }
    }
} 



