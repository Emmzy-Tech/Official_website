import React, {useState} from 'react'
import {Drawer, List, ListItemText, ListItem, ListItemIcon, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles'
import {useTheme} from '@material-ui/core/styles'

const DrawerComponent = ()=>{
    //const styledApp = styled.div``;
    const [openDrawer, setOpenDrawer] = useState(false);  
    
    const useStyles= makeStyles((theme)=>({
        icon:{
            [theme.breakpoints.up('md')]:{
                display: 'none'
            },        
        },
    
    }))
    const classes = useStyles();

    return(
     <>
        <Drawer anchor="right" onClose={()=>{setOpenDrawer(false)}} open={openDrawer} className={classes.draw}>
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
            <IconButton onClick={()=>{setOpenDrawer(!openDrawer)}} className={classes.icon}>
            <MenuIcon style={{color:'green'}}/>
            </IconButton>
        </>
    )
}

export default DrawerComponent;