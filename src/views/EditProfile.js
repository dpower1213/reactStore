import React from 'react'
import MyEditForm from '../forms/MyEditForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function EditProfile() { 
    const theme=useTheme()

  return (
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Edit Profile</Typography>
        <MyEditForm/>
    </Paper>
  )
}