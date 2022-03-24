import React, {useEffect, useContext} from 'react'
// import {Navigate} from "react-router-dom"
import { AppContext } from '../context/AppContext';
// import MyLoginForm from '../forms/MyLoginForm'
import HomePage from '../views/HomePage'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function Logout() {
    const theme=useTheme()
    const {setUser} = useContext(AppContext);
    useEffect(
        ()=>{
            setUser({})
        },[setUser]
    )
    console.log(setUser)
    return (
        <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">HomePage</Typography>
        <HomePage/>
        </Paper>
  )
}
