import {createContext, useState, useEffect, useReducer} from "react";
import useGetBooks from '../hooks/useGetBooks'
import {listReducer, listActions} from "../reducers/readingListReducer";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }
    
    const getListFromLS=()=>{
        let list = localStorage.getItem('list');
        if(list){
            return JSON.parse(list)
        }
        return []
    }
    
    let book = useGetBooks()

    const [user, _setUser]=useState(getUserFromLS());
    const [alert, setAlert]=useState({});
    const [list, dispatch]=useReducer(listReducer,getListFromLS())

    useEffect(
        ()=>{
            localStorage.setItem('list', JSON.stringify(list))
        },
        [list]
    )

    const values={
        user,
        setUser:(user)=>{
            localStorage.setItem('user',JSON.stringify(user))
            _setUser(user)
        },
        alert,
        setAlert,
        book,
        addToList:(book)=>{
            dispatch({type: listActions.addToList, book})
        },
        removeFromList:(book)=>{
            dispatch({type: listActions.removeFromList, book})
        },
        emptyList:()=>{
            dispatch({type: listActions.emptyList})
        },
        
    }    
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
    }   

export default AppContextProvider