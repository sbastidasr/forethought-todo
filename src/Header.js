import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
const now = moment();

const Header = ({ toDos }) => {
  return (
    <HeaderContainer>
      <div>
        <HeaderDate>
          <span> {now.format("dddd,")} </span>
          <span className="light">{now.format("Do")}</span>
        </HeaderDate>
        <HeaderSubDate>{now.format("MMMM")}</HeaderSubDate>
      </div>
      <HeaderRight>
        <HeaderSubDate>{`${toDos.length} tasks`}</HeaderSubDate>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

// HEADER

const HeaderContainer = styled.div`
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
