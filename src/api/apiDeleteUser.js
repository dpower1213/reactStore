import clientTokenAuth from './clientTokenAuth'

const endpoint = 'https://cae-bootstore.herokuapp.com/user';

export const deleteUser = async(token, cancelToken)=>{
    let message;
    let user;
    let error;
    const response = await clientTokenAuth(token, cancelToken).delete(endpoint);
    if (response.ok){
        message = 'Deleted!'
        user=response.data
        console.log(response.data)
    }else {
        console.log(response.data)
        error = 'Error has Occured. Please Try Again'
    };
    return{
        error,
        user,
        message
    };
};