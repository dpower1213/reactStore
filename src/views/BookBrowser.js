import {useState} from 'react';
import BasicMenu from '../components/Menu.js';
import TableBooks from '../components/TableBooks';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

export default function BookBrowser() {
    const [book, setBook]=useState()

  return (
    <>
      <Typography variant='h3'>Read More Books!!!</Typography>
      <Box sx={{display:"flex", alignContent:"center", justifyContent:"center", width:"100%"}}>
        <BasicMenu handleClick={(book)=>{setBook(book)}}/>
      </Box>
    </>
  )
}
