import React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const Sidebar = ()=>{
    const drawerWidth = 280;
return(
    <div>
            <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            margin:"50px",
            border:'1px solid',
            borderRadius:'25px',
            maxHeight:'90%',
            backgroundColor:'#4708B3',
            boxSizing: 'border-box',
            justifyContent:'center'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <List>
          {['Profile', 'Posts', 'Gallery', 'ToDo'].map((text, index) => (
            <ListItem key={text} disablePadding selected={text=="Profile"}>
              <ListItemButton>
                <ListItemText primary={text} style={{
                    paddingBottom:'14px',color:'white',borderBottom:'1px solid lightslategray',
                    marginLeft:'30px',marginRight:'21px'}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
)
}
export default Sidebar;