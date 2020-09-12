import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import './App.css';
import Task from './jsFiles/Task';

function App() {

  const [todos, setTodos] = useState(["Task 1", "Task 2"]);

  const [input, setInput] = useState("");

  const _setInput = (event) => {
    setInput(event.target.value);
  };

  const _addTodo = (e) => {
    e.preventDefault(); //Will prevent refresh of page
    
      setTodos([...todos, input]);
      setInput("");
   
     
  };

  return (
    <div className="App">
      <h1>Hellloooo World</h1>

      <form id="taskForm">
        <FormControl>
          <InputLabel>Write task</InputLabel> 
          <Input value={input} onChange={_setInput}></Input>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={_addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button type="submit" onClick={_addTodo}>Add Todo</button> */}
        {/* <input value={input} onChange={event => setInput(event.target.value)}></input>  SET STATE WITH ARROW FUNCTION*/}
        {/* <input value={input} onChange={_setInput}></input> */}
        {/* <TextField id="todoInput" label="Task" variant="outlined" InputLabelProps={{shrink: true}} onChange={_setInput} value={input}/> */}
      </form>

      <ul>
        {
          todos.map((todo)=>(
            <Task text={todo} ></Task>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
