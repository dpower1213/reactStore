import {createContext, useState, useEffect} from "react";
import useGetBooks from '../hooks/useGetBooks'
export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    let book = useGetBooks()
    
    const getUserFromLS=()=>{
        // should this be getUer?
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }

    const [user, _setUser]=useState(getUserFromLS());
    const [alert, setAlert]=useState({});
    
    const values={
        user,
        setUser:(user)=>{
            localStorage.setItem('user',JSON.stringify(user))
            _setUser(user)
        },
        book
    }
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
    }   

export default AppContextProvider