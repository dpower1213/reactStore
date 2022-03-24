import React, {useContext} from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import normalTheme from './themes/normalTheme';
import Directory from './components/MainMenu';
import { AppContext } from './context/AppContext';
import {Routes, Route} from 'react-router-dom';
import HomePage from './views/HomePage';
import HomePage2 from './views/HomePage2';
import BrowseBooks from './views/BrowseBooks';
import ReadingListView from './views/ReadingListView';
import EditProfile from './views/EditProfile.js';
import Register from './views/Register';
import Login from './views/Login';
import Logout from './views/Logout';
import OneBook from './components/OneBook';
import MyOneBook from './components/OneBook';

function App() {
  const {user}=useContext(AppContext)
  return (
  <>
    <ThemeProvider theme={normalTheme}>
    <Directory>
    <Routes>
      <Route path="/" element={<HomePage2/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/BrowseBooks" element={<BrowseBooks/>}/>
      
      <Route path="/Onebook/:onebookId" element={<OneBook />}/>
      <Route path="/OneBook" element={<MyOneBook/>}/>
      
      <Route path="/ReadingListView" element={<ReadingListView/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/EditProfile" element={<EditProfile/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Logout" element={<Logout/>}/>
    </Routes>
    </Directory>
    </ThemeProvider>
  </>
  );
};
export default App;