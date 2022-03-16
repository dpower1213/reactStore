import React from 'react'
import MyLoginForm from '../forms/MyLoginForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function Login() {
  const theme=useTheme()

  return (
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Login</Typography>
        <MyLoginForm/>
    </Paper>
  )
}
