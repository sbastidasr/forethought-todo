import React from "react";
import styled from "styled-components";
import ToDo from "./ToDo";
// import background from "./background.svg";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <ToDo />
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
`;

export default App;
