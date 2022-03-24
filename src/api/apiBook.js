import apiClientNoAuth from './clientNoAuth'

const endpoint = 'https://cae-bootstore.herokuapp.com/book'

let book; 
let onebook;
export const GetBooks9 = async (cancelToken) =>{
    let error;
    let message;
    
    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    book=response.data
    console.log(book.books)
    // console.log(response)
    
    // if (response.ok){
        //     // console.log(response.data.books[13])  
        //     message = 'good'
        //     console.log(message)
        
        // }else{
            //     error = 'An Unexpected Error has Occured. Please Try Again'
            // }
            
            return {
                book:book.books,
            };
};

export const GetOneBook= async (id, cancelToken) =>{
    let error;
    let message;
    
    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id);
    onebook=response.data
    // console.log(onebook.books)
    // console.log(response)
    
    // if (response.ok){
        //     // console.log(response.data.books[13])  
        //     message = 'good'
        //     console.log(message)
        
        // }else{
            //     error = 'An Unexpected Error has Occured. Please Try Again'
            // }
            
            return {
                onebook,
            };
        };