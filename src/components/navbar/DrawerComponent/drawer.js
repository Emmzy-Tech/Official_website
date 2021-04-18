import React, {useState} from 'react'
import {Drawer, List, ListItemText, ListItem, ListItemIcon, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const DrawerComponent = ()=>{

    const [openDrawer, setOpenDrawer] = useState(true);

    return(
    <>
        <Drawer anchor="right" onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
            <List>
                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Courses</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Courses</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Courses</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem button divider>
                    <ListItemIcon>
                    <ListItemText>Courses</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        <IconButton>
            <MenuIcon />
        </IconButton>
        </>
    )
}

export default DrawerComponent;