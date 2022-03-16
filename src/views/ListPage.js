import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import TableReadingList from '../components/TableReadingList'
import Typography from '@mui/material/Typography';

export default function ListPage() {
    
    const {list} = useContext(AppContext)
    if (list.length<=0){
        return(
      <Typography variant='h3'>Empty List</Typography>
        )
    }
  return (
    <>  
        <Typography variant='h3'>Your List</Typography>
    </>

  )
}
