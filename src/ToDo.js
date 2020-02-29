import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import defaultTodos from "./defaultTodos";
import Header from "./Header";

const ToDo = () => {
  const [timeInput, setTimeInput] = useState("00:00");
  const [textInput, setTextInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [toDos, setTodos] = useState(defaultTodos);

  const toggleItem = (e, index) => {
    e.stopPropagation();
    const toDosCopy = [...toDos];
    toDosCopy[index].completed = !toDosCopy[index].completed;
    setTodos(toDosCopy);
  };
  const editItem = index => {
    const edit = toDos[index];
    setShowForm(true);
    setTextInput(edit.text);
    setTimeInput(edit.due.format("HH:mm"));
    const toDosCopy = toDos.filter((_, i) => i !== index);
    setTodos(toDosCopy);
  };

  const addItem = e => {
    e.preventDefault();
    if (!textInput.length) {
      setShowForm(false);
      return;
    }
    const todosCopy = [
      ...toDos,
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
      <Header toDos={toDos} />
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
        {toDos.map((toDo, index) => (
          <ToDoItem
            onClick={() => editItem(index)}
            completed={toDo.completed}
            key={index}
          >
            <span className={toDo.completed ? "completed" : ""}>
              <CheckBox
                type="checkbox"
                checked={toDo.completed}
                onClick={e => toggleItem(e, index)}
                readOnly
              />
              <span className={toDo.completed ? "line-through" : ""}>
                {toDo.text}
              </span>
            </span>
            <RightDate> {toDo.due.format("HH:MM A")}</RightDate>
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

// Header

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
const TodoContainer = styled.div`
  margin-top: 20px;
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

const CheckBox = styled.input`
  margin-right: 20px;
`;

const RightDate = styled.div`
  color: rgb(182, 182, 182);
  font-size: 0.7rem;
  line-height: 1rem;
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
