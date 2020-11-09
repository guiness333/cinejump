import React from "react";
import GlobalStyle from "./global";
import Routes from "./routes";
import { ProductionText } from './Components';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      {!process.env.REACT_APP_IS_PRODUCTION && 
      <ProductionText>Ambiente de Desenvolvimento</ProductionText>
      }
    </div>
  );
}

export default App;
