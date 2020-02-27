import React from "react";
import logo from "./logo.svg";
// import './App.css';
import styled from "styled-components";
import MyComponent from "./MyComponent";
import ToDo from "./ToDo";

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
`;

export default App;
