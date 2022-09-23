import { useState } from 'react';
import './App.css';
import Task from './components/task';


function App() {
  const [list, setList] = useState([])
  const [userInput, setUserInput] = useState('')
  console.log(list)

  const addToList = () => {
    setList([...list, userInput])
    setUserInput('')
  }

  const toDoList = list.map((task, index) => {
    return (

      <Task task={task}/>
    )
  })


  return (
    <div className="App">
      <h1>My To Do List</h1>
      <div className='input-container'>
      <input value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
      <button onClick={addToList}>Add Task</button>
      </div>
      <h2>My list</h2>
      <div className='task-container'>
        {toDoList}
      </div>
    </div>
  );
}

export default App;
