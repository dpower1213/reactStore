import React, { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { editUser } from '../api/apiEditUser'
import { AppContext } from '../context/AppContext'

export default function useEditUser() {   
    let response
    const {user, setAlert} =useContext(AppContext)

    useEffect(()=>{
            const source = CancelToken.source()
            const editUser2=async()=>{
                response = await editUser(user.token, user.id, source.token);
                if (response){
                    setAlert({msg:`User Information: ${user.name_first} Edited`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Login`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(user?.name_first){
                editUser2();
            };
            return ()=>{source.cancel()}
        },[user]
    )
}