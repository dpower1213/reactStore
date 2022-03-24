import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {AppContext} from '../context/AppContext';
import {useNavigate} from 'react-router-dom';
import MyOneBook from './OneBook';
import OneBook from './OneBook';

export default function BasicTable({rows}) {
    const {addToList} = useContext(AppContext);
    const {removeFromList} = useContext(AppContext);
    const {emptyList} = useContext(AppContext);
    
    // const {error, onebook} =useGetBooks(categoryID);
    const navigate = useNavigate()
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Cover</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="left">Summary</TableCell>
            <TableCell align="left">Pages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell align="left"><img src={row.img} width="50" height="75"/></TableCell>
              <TableCell align="left"><button onClick ={()=> {addToList(row)}}>
              {row.title}</button></TableCell>
              
              <TableCell align="left"><button onClick ={()=> {OneBook({row})}}>
              {row.subject}</button></TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.summary}</TableCell>
              <TableCell align="left">{row.pages}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
