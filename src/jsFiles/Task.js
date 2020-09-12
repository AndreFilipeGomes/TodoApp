import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import '../cssFiles/Task.css'

function Task(props) {
    return (
        <List className="task__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemText primary={props.text}></ListItemText>
            </ListItem>
        </List>
    )
}

export default Task
