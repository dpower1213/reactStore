// import React, {useContext} from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import {useTheme} from '@mui/material/styles'
// import {AppContext} from '../../context/AppContext'

// const range=(x)=>[...Array(x).keys()]

// export default function ChangeListOnebook({onebook, qty, setQty}) {
//     const {addBulkToList, removeAllFromList} = useContext(AppContext)

//     const theme = useTheme();

//     const handleChange=(event, onebook)=>{
//       removeAllFromList(onebook)
//       addBulkToList(Array(event.target.value).fill(onebook))      
//     }

//   return (
//     <FormControl fullWidth sx={{backgroundColor:theme.palette.background.default}}>
//     <InputLabel id="qty-sel">Qty</InputLabel>
//     <Select
//         labelId="qty-sel"
//         id="qty-sel-sel"
//         value={qty}
//         label="Qty"
//         onChange={event=>handleChange(event, onebook)}
//         >
//             {range(qty+100).map(
//             (qtySel)=>qtySel<qty || qtySel<10 || qtySel%10===0 || qtySel%25===0 
//             ?
//             <MenuItem key={qtySel} value={qtySel}>{qtySel}</MenuItem>
//             :''
//             )}
//     </Select>
//     </FormControl>
//   )
// }