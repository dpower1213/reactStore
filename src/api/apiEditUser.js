import clientTokenAuth from './clientTokenAuth'

const endpoint = 'https://cae-bootstore.herokuapp.com/user';

export const editUser = async (email, password, first_name, Last_name, cancelToken) =>{
    let error;
    let message;
    let user;
    
    const response = await clientTokenAuth(email, password, first_name, Last_name, cancelToken).put(endpoint);
    if (response.ok){
        message = 'bueno!'
        user=response.data
        // console.log(response.data)
    }else {
        error = 'Error has Occured. Please Try Again'
    }
    
    return{
        error,
        user,
        message
    };
};
// export const getuserByCat = async(id, cancelToken)=>{
//     let error;
//     let user;

// const response = await apiClientNoAuth(cancelToken).get(endpoint+'/user/'+id);
//     if (response.ok){
//         user=response.data.user
//     }else{
//         error = 'An Unexpected Error has Occured. Please Try Again'
//     }
    
//     return{
//         error,
//         user,
//     }

// export const postUser = async(token, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token).post(endpoint,data);
//     return response.ok
// }

// export const putItem = async(token,id, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token).put(endpoint+'/'+id,data);
//     return response.ok
// }

// export const deleteItem = async(token, id, cancelToken)=>{
//     const response = await apiClientTokenAuth(token).delete(endpoint+'/'+id);
//     return response.ok
// }
// }