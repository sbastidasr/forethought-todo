import React, { useState } from "react";
import styled from "styled-components";

const ToDoForm = ({ addItemCallback, cancel, toDo }) => {
  const [timeInput, setTimeInput] = useState(
    toDo ? toDo.due.format("HH:mm") : "00:00"
  );
  const [textInput, setTextInput] = useState(toDo ? toDo.text : "");

  const addItem = e => {
    e.preventDefault();

    addItemCallback(textInput, timeInput);
    setTextInput("");
    setTimeInput("00:00");
  };
  return (
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
      <input className="add-button" type="button" value="X" onClick={cancel} />
    </InputForm>
  );
};

const InputForm = styled.form`
  text-align: left;
  border-bottom: 1px solid rgb(240, 240, 240);
  padding: 20px;
  display: flex;
  height: 100%;
  color: rgb(182, 182, 182);

  & input {
    padding: 5px;
    font-size: 0.8rem;
    border: 1px solid rgb(182, 182, 182);
    border-radius: 3px;
    margin-right: 5px;
  }

  & .input {
    width: calc(100% - 160px);
  }

  & .add-button {
    display: inline-block;
  }

  & .add-button:last-of-type {
    margin-right: 0px;
  }
`;

export default ToDoForm;
