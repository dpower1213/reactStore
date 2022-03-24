// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import useGetBooks from 'hooks/useGetBooks'
// import Error from './Error';
// import ReadingListFun from '../view/ReadingListView'
// // import from '../view/ReadingListView'

//   export default function BasicTable({rows}) {
//     const {error, onebook} = (onebook.id);
//     const {addToList} = useContext(AppContext);
  
//     const handleAddToList =(onebook)=>{
//       addToList(onebook)
//     }
    
//     if (error){return (
//       <Box sx={{display:'flex'}}>
//         <Error>{error}</Error>
//       </Box>)
//   }
  
//     if (!onebook){
//         return(
//         <Box sx={{display:'flex'}}>
//             <CircularProgress/>
//         </Box>)
//     }
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">Cover</TableCell>
//             <TableCell align="left">Title</TableCell>
//             <TableCell align="left">Author</TableCell>
//             <TableCell align="left">Subject</TableCell>
//             <TableCell align="left">Summary</TableCell>
//             <TableCell align="left">Pages</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows?.map((row) => (
//             <TableRow
//               key={row.title}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
//               <TableCell align="left"><img src={row.img} width="50" height="75"/></TableCell>
              
//               <TableCell align="left">
//               <a onClick ={()=> {addToList(onebook)}}>
//               {row.title}</a>
              
//               {/* </TableCell> */}
//               {/* console.log(row.title) */}
//               {/* <IconButton */}
//               sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//               aria-label={`info about ${onebook.id}`}
//               onClick={()=>{addToList(onebook)}}
//             {/* </IconButton> */}
            
//             </TableCell>
//               <TableCell align="left">{row.author}</TableCell>
//               <TableCell align="left">{row.subject}</TableCell>
//               <TableCell align="left">{row.summary}</TableCell>
//               <TableCell align="left">{row.pages}</TableCell>
//             </TableRow>
            
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
