import React, { useRef } from "react";
import Todotable from "./Todolist";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

function Home() {
  const [task, setTask] = React.useState({
    desc: "",
    date: new Date(),
    priority: "",
  });
  const [todos, setTodos] = React.useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
  };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      const newTodos = todos.filter(
        (todo, index) =>
          index !== gridRef.current.getSelectedNodes()[0].childIndex
      );
      setTodos(newTodos);
    } else {
      alert("Select row first!");
    }
  };

  return (
    <div className="App">
      <div>
        <Stack direction="row" spacing={2} justifyContent="center">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Choose date"
              size="small"
              name="date"
              value={task.date}
              minDate={new Date("2017-01-01")}
              inputFormat="dd.MM.yyyy"
              onChange={(newValue) => {
                setTask({ ...task, date: newValue });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            label="description"
            name="desc"
            onChange={inputChanged}
            value={task.desc}
          />

          <TextField
            label="priority"
            name="priority"
            onChange={inputChanged}
            value={task.priority}
          />
          <Button onClick={addTodo} variant="outlined" color="success">
            Add
          </Button>
          <Button onClick={deleteTodo} variant="outlined" color="error">
            Delete
          </Button>
        </Stack>
      </div>
      <Todotable todos={todos} delete={deleteTodo} gridRef={gridRef} />
    </div>
  );
}

export default Home;
