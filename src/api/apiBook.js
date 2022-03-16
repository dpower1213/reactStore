import apiClientNoAuth from './clientNoAuth'
// import apiClientTokenAuth from './clientTokenAuth'

const endpoint = 'https://cae-bootstore.herokuapp.com/book'

export const getBooks = async (cancelToken) =>{
    let error;
    let book;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if (response.ok){
        book=response.data.book
    }else{
        error = 'An Unexpected Error has Occured. Please Try Again'
    }
    
    return{
        error,
        book,
    }
}