const FETCH_BOOKS = 'FETCH_BOOKS'

const initialState = {
    books: [
        {id: 1, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'},
        {id: 2, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'},
        {id: 3, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'},
        {id: 4, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'},
        {id: 5, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'},
        {id: 6, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'},
        {id: 7, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю'}
    ]
}

export const bookReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_BOOKS :
                return {...state, state}
            default:
                return state
        }
} 