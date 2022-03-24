import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

export default function AddRemoveListOnebook({onebook}) {
  const {addToList, removeFromList, removeAllFromList} = useContext(AppContext)

  return (
    <ButtonGroup sx={{margin:"auto"}}>
        <IconButton key="delete" onClick={()=>{removeAllFromList(onebook)}}>
          <DeleteForeverTwoToneIcon fontSize="small"/>
        </IconButton>
        <IconButton  key="rm" onClick={()=>{removeFromList(onebook)}}>
          <RemoveCircleTwoToneIcon fontSize="small"/>
        </IconButton>
        <IconButton  key="add" onClick={()=>{addToList(onebook)}}>
          <AddCircleTwoToneIcon fontSize="small"/>
        </IconButton>
    </ButtonGroup>
  )
}