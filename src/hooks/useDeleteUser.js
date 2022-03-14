import React, { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import { deleteUser} from '../api/apiDeleteUser';
import { AppContext } from '../context/AppContext';

export default function useDeleteUser(user1) {   
    let response
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const deleteUsers=async()=>{
                response = await deleteUser(user.token, user.id, source.token);
                if (response){
                    setAlert({msg:`User: ${name_first} Deleted`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(user?.name_first){
                deleteUsers();
            };
            return ()=>{source.cancel()}
        },[user]
    )
  
}
