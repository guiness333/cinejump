import React from "react";
import GlobalStyle from "./global";
import { Logo } from "./pages/Login/Logo";
import { Container } from "./pages/Login/LoginContainer";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Logo />
      </Container>
    </div>
  );
}

export default App;
