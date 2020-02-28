import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

const ToDo = () => {
  const now = moment();
  let textInput = React.createRef();
  let timeInput = React.createRef();
  const [showForm, setShowForm] = useState(true);
  const [todos, setTodos] = useState([
    {
      text: "Morning Run",
      completed: true,
      due: moment("2020-01-22T05:00:00Z")
    },
    {
      text: "Buy Pizza on the way to work",
      completed: false,
      due: moment("2020-01-05T22:00:00Z")
    },
    {
      text: "10AM Meeting",
      completed: false,
      due: moment("2020-01-17T08:00:00Z")
    },
    {
      text: "Work Lunch with the dudes",
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
          <HeaderDate>
            <span> {now.format("dddd,")} </span>
            <span className="light">{now.format("Do")}</span>
          </HeaderDate>
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
        <InputForm onSubmit={addItem}>
          <input
            type="text"
            className="input"
            placeholder="New Todo"
            ref={textInput}
          />
          <input type="time" ref={timeInput} value="00:00" />
          <input className="add-button" type="submit" value="+" />
        </InputForm>
      )}

      <TodoContainer>
        {todos.map((todo, index) => (
          <ToDoItem
            onClick={() => toggleItem(index)}
            completed={todo.completed}
          >
            <span className={todo.completed ? "completed" : ""}>
              <CheckBox type="checkbox" checked={todo.completed} />
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            </span>
            <RightDate> {todo.due.format("HH:MM A")}</RightDate>
          </ToDoItem>
        ))}
      </TodoContainer>
      <div style={{ height: "30px" }} />
    </ToDos>
  );
};

const RightDate = styled.div`
  color: rgb(182, 182, 182);
  font-size: 0.7rem;
  line-height: 1rem;
`;

const CheckBox = styled.input`
  margin-right: 20px;
`;

const TodoContainer = styled.div`
  margin-top: 20px;
`;

const ToDos = styled.div`
  width: 430px;
  margin: 100px auto;
  background-color: white;
  margin-top: 200px;
  position: relative;
  border-radius: 8px;
`;

const Header = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(240, 240, 240);
  background-color: rgb(252, 252, 254);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const HeaderRight = styled.div`
  padding-top: 10px;
`;

const HeaderLeft = styled.div`
  // padding: 20px;
`;

const HeaderDate = styled.div`
  color: rgb(90, 99, 223);
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 10px;

  & .light {
    font-weight: 100;
  }
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
  right: 20px;
  top: 85px;
  color: white;
  background-color: rgb(234, 116, 109);
`;

const ToDoItem = styled.div`
  text-align: left;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 20px;
  display: flex;
  justify-content: space-between;

  ${props => (props.completed ? "color: rgb(182, 182, 182);" : "")}

  & .line-through {
    text-decoration: line-through;
  }
`;

const InputForm = styled.form`
  text-align: left;
  border-bottom: 1px solid rgb(240, 240, 240);
  padding: 20px;
  display: flex;
  height: 100%;
  & input {
    padding: 5px;
    font-size: 0.8rem;
  }
  & .input {
    width: calc(100% - 120px);
  }

  & .add-button {
    margin-top: 5px;
    margin-left: 10px;
    display: inline-block;
  }
`;

export default ToDo;
