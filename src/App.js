import React from "react";
import styled from "styled-components";
import ToDo from "./ToDo";
// import background from "./background.svg";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <ToDo />
        <Notes>
          <ul>
            <b>Notes</b>
            <li>This is not finished yet! Will finish it over the weekend </li>
            <li>
              Editing happens in the same form as creating (to show basic
              editing functionality. Will do it in a modal)
            </li>

            <li>Will also add better component structure</li>
          </ul>
        </Notes>
      </AppContainer>
    );
  }
}
const AppContainer = styled.div`
  text-align: center;
  background-color: rgb(90, 99, 223);
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url("background.svg");
  background-size: cover;
`;
const Notes = styled.div`
  width: 430px;
  color: white;
  margin: auto;
  text-align: left;
`;

export default App;
