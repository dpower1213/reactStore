import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(item_name, description, msrp, price) {
  return { item_name, description, msrp, price };
}

const rows = [
  createData('Trump Wig', 'long pubic hair wig, blonde', 500, 350),
  createData('McConnell Neck Pouch', 'rotten fish included', 250, 350),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <h4>Items For Sale</h4>
            </TableRow>
            <TableRow>
            <TableCell align="left">Item Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">MSRP</TableCell>
            <TableCell align="left">Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.item_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.item_name}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.msrp}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}