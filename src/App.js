import React from 'react';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import { ThemeProvider } from '@mui/material/styles';
import normalTheme from './themes/normalTheme';
import { getUser } from './api/apiLogin';
import { getBooks } from './api/apiBook';
import {putUser} from './api/apiEditUser';
import {deleteUser} from './api/apiDeleteUser';
import {postUser} from './api/apiNewUser';
import {CancelToken} from 'apisauce';
import MyLoginForm from './forms/MyLoginForm';
import MyEditForm from './forms/MyEditForm';
import MyRegisterForm from './forms/MyRegisterForm';
import MainMenu from './components/MainMenu';
import TableBooks from './components/TableBooks';
import TableReadingList from './components/TableReadingList';
import BookCard from './components/BookCard';
// import { postCategory } from './api/apiCategory';
// import { getItemsByCat } from './api/apiItem';
// import CatForm from './forms/CatForm';
// import ItemForm from './forms/ItemForm';
// import AdminSelectCat from './components/AdminSelectCat';

// const handleClick = async () => {
  //   const source = CancelToken.source();
  //   const response_object = await postCategory('ZtyZo5GhHFuQ9tgbKAROkGzK3jTVSlAtEswA8paYfAQ', 'newCAT',source.token);
  //   console.log(response_object)
  // }
  
  // test edit user
  // const handleClick = async()=>{
  //   const source = CancelToken.source();
  //   const response_object = await putUser({email: "g@g.com", first_name: "a", last_name: "a", password: "a"}, source.token);
  //   console.log(response_object);
  // };
  
  // test create user
  // const handleClick = async()=>{
  //   const source = CancelToken.source();
  //   const response_object = await postUser({email: "p@p.com", first_name: "david", last_name: "power", password: "p"}, source.token);
  //   console.log(response_object);
  // };

// // test delete
// const handleClick = async()=>{
  //   const source = CancelToken.source();
  //   const response_object = await deleteUser("ALaNSOUbvuR96vuVEu7HZO_7tjYAQNA--AwaJvZYvpY", source.token);
  //   console.log(response_object);
  // };

// // test book
// const handleClick = async()=>{
//   const source = CancelToken.source();
//   const response_object = await getBooks(source.token);
//   console.log(response_object);
// };

// // // test login
// const handleClick = async()=>{
//   const source = CancelToken.source();
//   const response_object = await getUser("e@e.com", "e", source.token);
//   console.log(response_object);
// };

function App() {
  return (
    <ThemeProvider theme={normalTheme}>
    <MainMenu>
    {/* <MyLoginForm> */}
    {/* <MyEditForm> */}
    {/* <MyRegisterForm> */}
    {/* <Button onClick={handleClick}>API Call</Button> */}
    {/* <Button onClick={handleSubmit}>Submit</Button> */}
    {/* <Button onClick={handleSubmit}>Login</Button> */}
    {/* </MyRegisterForm> */}
    {/* </MyEditForm> */}
    {/* </MyLoginForm> */}
    </MainMenu>
    <TableBooks></TableBooks>
    <TableReadingList></TableReadingList>
    <BookCard></BookCard>
    </ThemeProvider>
  );
};
export default App;

// {/* <h1>My First React Page!!!!!!</h1> */}
// {/* <Error  className="my_class">
// Some Rando - Error
// </Error>
// <Button variant="text" onClick={()=>alert('clciky')}>Click Me Beautiful</Button>
// <img src="https://res.cloudinary.com/cae67/image/upload/v1628184276/sample.jpg" alt="test"/>
// <hr/> */}
// {/* <AdminSelectCat/> */}
// {/* <hr/> <br/><br/> */}
// {/* <ItemForm/> */}