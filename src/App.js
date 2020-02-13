import React from "react";
import logo from "./logo.svg";
// import './App.css';
import styled from "styled-components";
import MyComponent from "./MyComponent";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppContainer>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            To get started, edit <code>src/App.js</code> and save.
          </AppIntro>
          <MyComponent />
        </AppContainer>
      </React.Fragment>
    );
  }
}
const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppIntro = styled.p`
  font-size: large;
  color: red;
`;
export default App;
