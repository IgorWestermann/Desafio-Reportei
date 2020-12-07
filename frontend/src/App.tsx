import React from "react";
import { BrowserRouter } from "react-router-dom";
import BasicStyle from "./styles/global";

import Routes from "./routes";

const App: React.FC = () => (
  <>
    <BasicStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
