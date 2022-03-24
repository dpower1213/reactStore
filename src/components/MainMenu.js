import React, {useContext} from 'react';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import {AppContext} from '../context/AppContext'
import {Link} from 'react-router-dom';


export default function Directory({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const menuId = 'Menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <Typography>
  //       <Link to='/' style={{textDecoration:"none", color:"inherit" }}>Home</Link>
  //       <Link to='/BrowseBooks'>BrowseBooks</Link>
  //       <Link to='/ReadingList'>ReadingList</Link>
  //       <Link to='/Register'>Register</Link>
  //       <Link to='/EditProfile'>EditProfile</Link>
  //       <Link to='/Login'>Login</Link>
  //       <Link to='/Logout'>Logout</Link>
  //     </Typography> 
  //     </Menu>
  // );
  
  // const mobileMenuId = 'Menu-mobile';
  // const renderMobileMenu = (
    // <Menu
    // anchorEl={mobileMoreAnchorEl}
    // anchorOrigin={{
      //   vertical: 'top',
    //   horizontal: 'right',
    // }}
    // id={mobileMenuId}
    // keepMounted
    // transformOrigin={{
      //   vertical: 'top',
      //   horizontal: 'right',
      // }}
      // open={isMobileMenuOpen}
      // onClose={handleMobileMenuClose}
      // >
      //   <MenuItem>
      //     <MenuItem >Login</MenuItem>
      //     <MenuItem >Register</MenuItem>
    //     <MenuItem >Edit Profile</MenuItem>
    //     <MenuItem >Logout</MenuItem>
    //   </MenuItem>
    //   <MenuItem>
    //     <IconButton
    //       size="large"
    //       aria-label="Not Used?"
    //       color="inherit"
    //     >
    //       <Badge badgeContent={17} color="error">
    //         <NotificationsIcon />
    //       </Badge>
    //     </IconButton>
    //     <p>Notifications</p>
    //   </MenuItem>
    //   <MenuItem onClick={handleProfileMenuOpen}>
    //     <IconButton
    //       size="large"
    //       aria-label="account of current user"
    //       aria-controls="primary-search-account-menu"
    //       aria-haspopup="true"
    //       color="inherit"
    //     >
    //       <AccountCircle/>
    //     </IconButton>
    //     <p>Profile</p>
    //   </MenuItem>
    // </Menu>
    // );
    
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            vertical="top"
            horizontal="right"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* top menu Bar */}
            <Link to='/HomePage' style={{textDecoration:"none", color:"inherit" }}>Home  |</Link>&nbsp;&nbsp;
            <Link to='/BrowseBooks' style={{textDecoration:"none", color:"inherit" }}>Browse Books  |</Link>&nbsp;&nbsp;
            <Link to='/OneBook' style={{textDecoration:"none", color:"inherit" }}>One Book  |</Link>&nbsp;&nbsp;
            {/* <Link to='/BookCardView' style={{textDecoration:"none", color:"inherit" }}>Book Card  |</Link>&nbsp;&nbsp; */}
            <Link to='/ReadingListView' style={{textDecoration:"none", color:"inherit" }}>Reading List  |</Link>&nbsp;&nbsp;
            <Link to='/Register' style={{textDecoration:"none", color:"inherit" }}>Register  |</Link>&nbsp;&nbsp;
            <Link to='/EditProfile' style={{textDecoration:"none", color:"inherit" }}>Edit Profile  |</Link>&nbsp;&nbsp;
            <Link to='/Login' style={{textDecoration:"none", color:"inherit" }}>Login  |</Link>&nbsp;&nbsp;
            <Link to='/Logout' style={{textDecoration:"none", color:"inherit" }}>Logout</Link>
                      
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Books! Books! Books!
          </Typography>
           {/* <Search>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            </Box>
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              >
              <Badge badgeContent={17} color="error">
              <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <Box>
            <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            >
              <AccountCircle />
              </IconButton>
            </Box> */}
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            >
            <MoreIcon/>
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {children}
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}
