import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import {ListOutlined} from '@material-ui/icons'
import './App.css';
import Task from './jsFiles/Task';
import db from './FireBase/firebase';
import firebase from 'firebase';


// export const _deleteItem = (Item) =>{
//   db.collection('Tasks').doc(Item.propText.id).delete();
// };

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //#region DataBase (firebase)

  const _getFromDatabase = () =>{
    db.collection('Tasks').orderBy('TimeStamp', 'desc').onSnapshot(snapshot=>{
      //we are mapping throw an array (data from firebase) and creating one by one (our own object) to add to our array 'todos'
      setTodos(snapshot.docs.map(doc => ({
        text: doc.data().Text,
        id: doc.id
      })));
    })
  };

  const _postToDatabase = () =>{
    db.collection('Tasks').add({
      Text: input,
      //Timestamp of the server
      TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  //#endregion

  //when the app loads listen to the db and fetch 'tasks' when they are added/removed
  //this use efect will run once when the app loads only one time
  useEffect(() => {
    _getFromDatabase();
  }, []);


  const _setInput = (event) => {
    setInput(event.target.value);
  };

  const _addTodo = (e) => {
    e.preventDefault(); //Will prevent refresh of page
    
    //Add to db the input value
    _postToDatabase();

    setInput("");
 
  };

  return (
    <div className="App">
       <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <div className="container-fluid container__form p-5">
        <h1>Tasks list <ListOutlined></ListOutlined> </h1>

        <form id="taskForm" className="mt-5">
          <FormControl>
            <InputLabel>Write task</InputLabel> 
            <Input value={input} onChange={_setInput}></Input>
          </FormControl>
          <Button disabled={!input} type="submit" onClick={_addTodo} variant="contained" color="primary">
            Add
          </Button>
          {/* <button type="submit" onClick={_addTodo}>Add Todo</button> */}
          {/* <input value={input} onChange={event => setInput(event.target.value)}></input>  SET STATE WITH ARROW FUNCTION*/}
          {/* <input value={input} onChange={_setInput}></input> */}
          {/* <TextField id="todoInput" label="Task" variant="outlined" InputLabelProps={{shrink: true}} onChange={_setInput} value={input}/> */}
        </form>
      </div>
     
      <div className="container__tasks">
        {
          todos.map((todo)=>(
            <Task propText={todo}></Task>
          ))
        }
      </div>
    </div>
  );
}

export default App;
