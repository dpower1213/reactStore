import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import BasicTable from '../components/TableReadingList';
import Typography from '@mui/material/Typography';
// import AddRemoveListOnebook from '../components/AddRemoveListOnebook';

export default function ReadingListView() {

  const {list} = useContext(AppContext)
      return (
      <>    
      <BasicTable rows={list}/>
      </>
      )
}