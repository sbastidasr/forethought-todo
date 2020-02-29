import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import defaultTodos from "./defaultTodos";
const now = moment();

const ToDo = () => {
  const [timeInput, setTimeInput] = useState("00:00");
  const [textInput, setTextInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(defaultTodos);

  const toggleItem = (e, index) => {
    e.stopPropagation();
    const todosCopy = [...todos];
    todosCopy[index].completed = !todosCopy[index].completed;
    setTodos(todosCopy);
  };
  const editItem = index => {
    const edit = todos[index];
    setShowForm(true);
    setTextInput(edit.text);

    setTimeInput(edit.due.format("HH:mm"));
    const todosCopy = todos.filter((e, i) => i !== index);
    setTodos(todosCopy);
  };

  const addItem = e => {
    e.preventDefault();
    if (!textInput.length) {
      setShowForm(false);
      return;
    }
    const todosCopy = [
      ...todos,
      {
        text: textInput,
        completed: false,
        due: moment(timeInput, "HH:mm")
      }
    ];
    setTextInput("");
    setTimeInput("00:00");
    setTodos(todosCopy);
    setShowForm(false);
  };

  return (
    <ToDos>
      <Header>
        <div>
          <HeaderDate>
            <span> {now.format("dddd,")} </span>
            <span className="light">{now.format("Do")}</span>
          </HeaderDate>
          <HeaderSubDate>{now.format("MMMM")}</HeaderSubDate>
        </div>
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
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
          />
          <input
            type="time"
            value={timeInput}
            onChange={e => setTimeInput(e.target.value)}
          />
          <input className="add-button" type="submit" value="Save" />
        </InputForm>
      )}

      <TodoContainer>
        {todos.map((todo, index) => (
          <ToDoItem
            onClick={() => editItem(index)}
            completed={todo.completed}
            key={index}
          >
            <span className={todo.completed ? "completed" : ""}>
              <CheckBox
                type="checkbox"
                checked={todo.completed}
                onClick={e => toggleItem(e, index)}
                readOnly
              />
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

// MAIN CONTAINER

const ToDos = styled.div`
  width: 90%;

  background-color: white;
  margin: 100px auto 40px auto;
  position: relative;
  border-radius: 8px;

  max-width: 700px;

  @media (min-width: 600px) {
    width: 75%;
  }
`;

// HEADER

const RightDate = styled.div`
  color: rgb(182, 182, 182);
  font-size: 0.7rem;
  line-height: 1rem;
`;

const TodoContainer = styled.div`
  margin-top: 20px;
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

// TODO ITEMS

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

const CheckBox = styled.input`
  margin-right: 20px;
`;

// TODO FORM

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
