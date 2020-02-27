import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

const ToDo = () => {
  let textInput = React.createRef();
  let timeInput = React.createRef();
  const [todos, setTodos] = useState([
    {
      text: "buy post it notes",
      completed: false,
      due: moment("2020-01-22T05:00:00Z")
    },
    {
      text: "finish css ",
      completed: true,
      due: moment("2020-01-05T22:00:00Z")
    },
    {
      text: "make it pixel-perfect",
      completed: false,
      due: moment("2020-01-17T08:00:00Z")
    }
  ]);

  const toggleItem = index => {
    const todosCopy = [...todos];
    todosCopy[index].completed = !todosCopy[index].completed;
    console.log("toggle", index, todosCopy);
    setTodos(todosCopy);
  };

  const addItem = e => {
    e.preventDefault();
    const value = textInput.current.value;

    const todosCopy = [
      ...todos,
      {
        text: value,
        completed: false,
        due: moment(timeInput.current.value, "hh:mm")
      }
    ];
    textInput.current.value = "";
    setTodos(todosCopy);
  };

  return (
    <ToDos>
      <InputLine onSubmit={addItem}>
        <input
          type="text"
          className="input"
          placeholder="New Todo"
          ref={textInput}
        />
        <input type="time" ref={timeInput} value="00:00" />
        <input type="submit" value="+" />
      </InputLine>
      {todos.map((todo, index) => (
        <ToDoItem onClick={() => toggleItem(index)}>
          <span>
            {todo.completed ? "☑" : "☐"}
            {todo.text}
          </span>
          <span> {todo.due.format("HH:MM A")}</span>
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
  display: flex;
  justify-content: space-between;
`;

const InputLine = styled.form`
  text-align: left;
  border: 1px solid gray;
  padding: 20px;

  & .input {
    width: calc(100% - 110px);
  }
`;

export default ToDo;
