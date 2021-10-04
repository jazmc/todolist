import React from 'react';
import './App.css';

function App() {
  const [task, setTask] = React.useState({desc: '', date: ''});
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    setTask({...task, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input type="date" name="date" value={task.date} onChange={inputChanged}/>
        <input type="text" name="desc" onChange={inputChanged} value={task.desc}/>
        <input type="submit" value="Add"/>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {
          todos.map((todo, index) =>
          <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
