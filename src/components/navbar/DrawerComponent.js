import React, {useState} from 'rect'
import {Drawer, List, ListItemText} from '@material-ui/core'

const DrawerComponent = ()=>{
    const [openDrawer, setOpenDrawer] = useState(true)
    return(
        <Drawer>
            <List>
                <ListItem>
                    <ListItext>Courses</ListItext>
                </ListItem>
            </List>
        </Drawer>
    )
}