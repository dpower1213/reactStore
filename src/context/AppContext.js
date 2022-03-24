import {createContext, useState, useEffect, useReducer} from "react";
import { useGetBooks2 } from '../hooks/useGetBooks'
import {listReducer, listActions} from "../reducers/listReducer";

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
    
    // let book = useGetBooks2()

    const [user, _setUser]=useState(getUserFromLS());
    const [alert, setAlert]=useState({});
    const [list, dispatch]=useReducer(listReducer, getListFromLS())

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
        list,
        addToList:(onebook)=>{
            dispatch({type: listActions.addToList, onebook})
        },
        displayCard:(onebook)=>{
            dispatch({type: listActions.displayCard, onebook})
        },
        removeFromList:(onebook)=>{
            dispatch({type: listActions.removeFromList, onebook})
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