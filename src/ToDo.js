import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import defaultTodos from "./defaultTodos";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const [showForm, setShowForm] = useState(false);
  const [toDos, setTodos] = useState(defaultTodos);

  const toggleItem = (e, index) => {
    e.stopPropagation();
    const toDosCopy = [...toDos];
    toDosCopy[index].completed = !toDosCopy[index].completed;
    setTodos(toDosCopy);
  };

  const editItem = (index, changes) => {
    const toDosCopy = [...toDos];
    toDosCopy[index] = { ...toDosCopy[index], ...changes };
    setTodos(toDosCopy);
  };

  const addItem = (textInput, timeInput) => {
    if (!textInput.length) {
      setShowForm(false);
      return;
    }
    const todosCopy = [
      {
        text: textInput,
        completed: false,
        due: moment(timeInput, "HH:mm")
      },
      ...toDos
    ];

    setTodos(todosCopy);
    setShowForm(false);
  };

  return (
    <ToDos>
      <Header toDos={toDos} />

      {!showForm && (
        <AddToDoButton onClick={() => setShowForm(!showForm)}>
          {showForm ? "-" : "+"}
        </AddToDoButton>
      )}

      {showForm && (
        <ToDoForm
          addItem={addItem}
          setShowForm={setShowForm}
          addItemCallback={addItem}
        />
      )}

      <TodoContainer>
        {toDos.map((toDo, index) => {
          if (toDo.editing)
            return (
              <ToDoForm
                addItemCallback={addItem}
                setShowForm={setShowForm}
                toDo={toDo}
                cancel={() => editItem(index, { editing: false })}
              />
            );

          return (
            <ToDoItem
              toDo={toDo}
              key={index}
              index={index}
              setEditing={() => editItem(index, { editing: true })}
              toggleItem={toggleItem}
            />
          );
        })}
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
  // margin-top: 20px;
`;

export default ToDo;
