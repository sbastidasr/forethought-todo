import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

const ToDo = () => {
  const now = moment();
  let textInput = React.createRef();
  let timeInput = React.createRef();
  const [showForm, setShowForm] = useState(false);
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
      <Header>
        <HeaderLeft>
          <HeaderDate>{now.format("dddd, Do")}</HeaderDate>
          <HeaderSubDate>{now.format("MMMM")}</HeaderSubDate>
        </HeaderLeft>
        <HeaderRight>
          <HeaderSubDate>{`${todos.length} tasks`}</HeaderSubDate>
        </HeaderRight>
      </Header>
      <AddToDoButton onClick={() => setShowForm(!showForm)}>
        {showForm ? "-" : "+"}
      </AddToDoButton>

      {showForm && (
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
      )}

      <TodoContainer>
        {todos.map((todo, index) => (
          <ToDoItem onClick={() => toggleItem(index)}>
            <span>
              {todo.completed ? "☑" : "☐"}
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            </span>
            <span> {todo.due.format("HH:MM A")}</span>
          </ToDoItem>
        ))}
      </TodoContainer>
      <div style={{ height: "20px" }} />
    </ToDos>
  );
};

const TodoContainer = styled.div`
  margin-top: 20px;
`;

const ToDos = styled.div`
  width: 500px;
  margin: 100px auto;
  background-color: white;
  margin-top: 200px;
  position: relative;
  border-radius: 20px;
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(182, 182, 182);
`;

const HeaderRight = styled.div`
  padding-top: 30px;
`;

const HeaderLeft = styled.div`
  padding: 20px;
`;

const HeaderDate = styled.div`
  color: rgb(90, 99, 223);
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
`;
const HeaderSubDate = styled.div`
  color: rgb(182, 182, 182);
  text-align: left;
`;
const AddToDoButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: pink;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 105px;
`;

const ToDoItem = styled.div`
  text-align: left;
  border-bottom: 1px solid rgb(182, 182, 182);
  padding: 20px;
  display: flex;
  justify-content: space-between;

  & .line-through {
    text-decoration: line-through;
  }
`;

const InputLine = styled.form`
  text-align: left;
  border-bottom: 1px solid rgb(182, 182, 182);
  padding: 20px;

  & .input {
    width: calc(100% - 110px);
  }
`;

export default ToDo;
