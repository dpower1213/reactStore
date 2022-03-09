import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

export default function Lists({children, variant, ...props}) {
return (
    <div>
    <ListItemButton component="a" href="#simple-list">
      <nav aria-label="main mailbox folders"></nav>
    <List>
      <ListItemText primary="My Custom List" />
      <ListItemText primary="My Custom List1" />
      <ListItemText primary="My Custom List2" />
      <ListItemText primary="My Custom List3" />
    </List>
    </ListItemButton>
    </div>
  )
}

  // <Button variant={variant??"contained"} {...props}>
  //     {children}
  // </Button>    