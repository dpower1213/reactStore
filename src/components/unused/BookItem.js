// import React, {useEffect, useState, useContext} from 'react'
// import { styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import {useTheme} from '@mui/material/styles';
// import BookCard from './BookCard';
// import { AppContext } from '../context/AppContext';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary : theme.palette.primary,
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     alignItems: 'center',
//     justifyContent:'center',
//     textAlign: 'center',
//     display:'flex',
//     color: theme.palette.text.secondary,
//   }));
  
//   export default function BookItem({onebook}) {
//     const theme = useTheme();
//     const {list} = useContext(AppContext);
    
//     const [qty,setQty]=useState(list.filter((bookItem)=>bookItem.id === onebook.id).length)

//     useEffect(
//         ()=>{
//             setQty(list.filter((bookItem)=>bookItem.id === onebook.id).length)
//         },[list, onebook]
//     )
    
//   return (
//     <Grid container spacing={2} sx={{m:1, pr:2, border: '1px solid', borderRadius:1, alignItems:"stretch"}}>
//         <Grid item md={4} sm={6} xs={12}>
//             {console.log(theme)}
//             <Item sx={{height:'100%'}}>
//                 <Avatar alt={onebook.title} sx={{height:'100%', width:"100%"}} variant="rounded" src={onebook.img}/>
//             </Item>
//         </Grid>
//         <Grid item md={3} sm={6} xs={12}>
//             <Item sx={{height:'100%'}}>
//                 <BookCard onebook={onebook}/>
//             </Item>
//         </Grid>
//     </Grid>
//   )
// }
