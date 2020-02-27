import React, { useState } from "react";
import styled from "styled-components";

const ToDo = () => {
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodos] = useState([
    {
      text: "buy post it notes",
      completed: false
    },
    {
      text: "finish css ",
      completed: true
    },
    {
      text: "make it pixel-perfect",
      completed: false
    }
  ]);

  return (
    <ToDos>
      {todos.map(todo => (
        <ToDoItem>
          {todo.completed ? "☑" : "☐"}
          <span> {todo.text}</span>
        </ToDoItem>
      ))}
    </ToDos>
  );
};

const ToDos = styled.div`
  //   border: 1px solid black;
  width: 30%;
  margin: 100px auto;
`;

const ToDoItem = styled.div`
  text-align: left;
  border: 1px solid gray;
  padding: 20px;
`;

export default ToDo;
