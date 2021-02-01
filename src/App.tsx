import React from "react";
import GlobalStyle from "./global";
import Routes from "./routes";
import { DevelopmentLabel } from "./Components";
import { AuthProvider } from "./domains/Auth/Hooks";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GlobalStyle />
        <Routes />
        <DevelopmentLabel />
      </AuthProvider>
    </div>
  );
}

export default App;
