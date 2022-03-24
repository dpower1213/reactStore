// import { useContext } from 'react';
// import BookItem from './BookItem';
// import { AppContext } from '../context/AppContext';

// export default function List() {
//   const {list} = useContext(AppContext)

//   return (
//     <>
//     {
//       [...new Set(list.map(JSON.stringify))]
//         .map(JSON.parse)?.map((onebook)=><BookItem key={onebook.id} onebook={onebook}/>)
//     }
//     </>
//   )
// }