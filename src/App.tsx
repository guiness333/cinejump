import React from "react";
import GlobalStyle from "./global";
import Routes from "./routes";
import { DevelopmentLabel } from './Components';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <DevelopmentLabel />
    </div>
  );
}

export default App;
