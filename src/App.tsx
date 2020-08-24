import React from "react";
import GlobalStyle from "./global";
import { Logo, LoginHeader, InputForm } from "./pages/Login/LoginComponents";
import { Container } from "./pages/Login/LoginContainer";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Logo />
        <LoginHeader />
        <InputForm />
      </Container>
    </div>
  );
}

export default App;
