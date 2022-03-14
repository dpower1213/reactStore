// import apiBasicAuth from './apiBasicAuth';

// const endpoint = 'https://cae-bootstore.herokuapp.com/login';

// export const getUser = async (email, password, cancelToken) =>{
//     let error;
//     let message;
//     let user;
    
//     const response = await apiBasicAuth(email, password, cancelToken).get(endpoint);
//     if (response.ok){
//         message = 'O\'tay'
//         user=response.data
//         console.log(response.data)
//     }else {
//         error = 'Error, try again?'
//     }
        
//     return{
//         error,
//         user,
//         message
//     };
// };