import React from "react";
import GlobalStyle from "./global";
import { Logo, LoginHeader, LoginForm, SignupDirect } from "./pages/Login/LoginComponents";
import { Container } from "./pages/Login/LoginContainer";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container width="100%">
        <Container width="70%">
          <Logo />
          <LoginHeader />
          <LoginForm />
        </Container>
        <Container width="30%">
          <SignupDirect />
        </Container>
      </Container>

    </div>
  );
}

export default App;
