import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

const ToDoItem = ({ toDo, index, setEditing, toggleItem }) => {
  return (
    <ToDoItemContainer
      onClick={() => setEditing(index)}
      completed={toDo.completed}
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
    </ToDoItemContainer>
  );
};

export default ToDoItem;

const ToDoItemContainer = styled.div`
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
  background-color: red;
`;

const RightDate = styled.div`
  color: rgb(182, 182, 182);
  font-size: 0.7rem;
  line-height: 1rem;
`;
