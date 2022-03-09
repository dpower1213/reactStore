import apiClientNoAuth from './clientNoAuth'
// import apiClientTokenAuth from './clientTokenAuth'

const endpoint = 'https://cae-bootstore.herokuapp.com/book'

export const getBooks = async (cancelToken) =>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if (response.ok){
        books=response.data.books
    }else{
        error = 'An Unexpected Error has Occured. Please Try Again'
    }
    
    return{
        error,
        books,
    }
}