import clientNoAuth from './clientNoAuth';

const endpoint = 'https://cae-bootstore.herokuapp.com/user';

export const postUser = async (data, cancelToken) =>{
    let error;
    let message;
    let user;
    console.log('data', data)
    
    const response = await clientNoAuth(cancelToken).post(endpoint, data);
    if (response.ok){
        message = 'bueno!'
        user=response.data.user
    }else {
        error = 'Error has Occured. Please Try Again'
    }
    
    return{
        error,
        user,
        message
    };
};