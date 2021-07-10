import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./components/MainPage";
import Feature from "./components/Feature";

import "./index.css";

const App = () => (
  <ChakraProvider>
    <MainPage>
      <Feature />
    </MainPage>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
