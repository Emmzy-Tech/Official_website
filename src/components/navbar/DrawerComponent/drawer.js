import React, {useState} from 'react'
import {Drawer, List, ListItemText, ListItem, ListItemIcon, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const DrawerComponent = ()=>{
    //const styledApp = styled.div``;
    const [openDrawer, setOpenDrawer] = useState(false);
    
    return(
    <>
        <Drawer anchor="right" onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
            <List>
                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Home</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>About us</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Programs</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem button divider>
                <ListItemIcon>
                <ListItemText>Consulting</ListItemText>
                </ListItemIcon>
            </ListItem>

            <ListItem button divider>
            <ListItemIcon>
            <ListItemText>Resources</ListItemText>
            </ListItemIcon>
        </ListItem>

                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Contact</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        <IconButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
            <MenuIcon style={{color:'white'}}/>
        </IconButton>
        </>
    )
}

export default DrawerComponent;