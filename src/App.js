import React, {useContext} from 'react';
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
import { AppContext } from './context/AppContext';
import {Routes, Route} from 'react-router-dom';
import Logout  from './views/Logout';
import Login from './views/Login';
import ListPage from './views/ListPage';
import BookBrowser from './views/BookBrowser';

const handleClick = async()=>{
  const source = CancelToken.source();
  const response_object = await getUser(source.token);
  console.log(response_object);
};

function App() {
  const {user}=useContext(AppContext)
  return (
    
    <ThemeProvider theme={normalTheme}>
    <MainMenu>
    <Routes>
      {/* <Route path="/"element={<HomePage/>}/> */}
      <Route path="/ReadingList"element={<ListPage/>}/>  
      <Route path="/BookBrowser"element={<BookBrowser/>}/>  
      <Route path="/Login"element={<Login/>}/>  
      <Route path="/Logout"element={<Logout/>}/>  
    </Routes>
    
    </MainMenu>
    </ThemeProvider>
  );
};
export default App;