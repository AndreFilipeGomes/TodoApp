import {Button, FormControl, Input, InputLabel, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core'
import {DeleteForeverOutlined, Edit } from '@material-ui/icons';
import React, { useState } from 'react'
import '../cssFiles/Task.css'
import db from '../FireBase/firebase';
//import _deleteItem from '../App'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Task(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.propText.text);

    const _setInput = (event) => {
        setInput(event.target.value);
    };

    //#region Modal
    const handleModelClose = () =>{
        setOpen(false);
    };

    const handleModelOpen = (text) =>{
        setInput(text);
        setOpen(true);
    };
    //#endregion

    //#region DataBase
    const _deleteItem = () =>{
        db.collection('Tasks').doc(props.propText.id).delete();
    };

    const _updateItem = () =>{
        //Update the Task with the value in the input
        db.collection('Tasks').doc(props.propText.id).set({
            Text: input
        }, {merge:true})

        handleModelClose();
    };
    //#endregion

    const body =(

        <div className={classes.paper + " text-center bodyEdit pt-3 pb-3"}>
            <h1>Edit task</h1>
          
            
            <div className="row mt-5">
                <div className="col-12">
                    <FormControl className="formControlEdit">
                        <InputLabel className="inputEdit">Text</InputLabel>
                        <Input multiline="true" rows="5" value={input} onChange={_setInput}></Input>
                    </FormControl>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 text-right">
                    <Button disabled={!input} type="submit" onClick={_updateItem} variant="contained" color="primary">Save</Button>
                </div>
            </div>

        </div>
    );


    
    return (
        <>
            <Modal className="EditModal" open={open} onClose={handleModelClose} >
                {body}
            </Modal>
            <List className="task__list">
                <div className="row">

                    <ListItem>
                        {/* 
                            propText -> corresponde ao nome da propriedade que foi passado na App.js 
                            text -> tag do campo do objeto 'todo' que é passado na App.js
                        */}
                        <div className="col-8">
                            <div className="listItem_text">
                                <ListItemText primary={props.propText.text}></ListItemText>
                            </div>
                        </div>
                        <div className="col-4 text-right">
                            <Edit className="task__list__edit ml-4" onClick={() => handleModelOpen(props.propText.text)}></Edit>
                            <DeleteForeverOutlined className="task__list__delete ml-2" onClick={() => _deleteItem(props)}/>
                        </div>
                    </ListItem>

                </div>
            </List>
        </>
    )
}

export default Task
