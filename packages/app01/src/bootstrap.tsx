import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";

const App = () => (
  <ChakraProvider>
    <Navbar>
      <Feature />
    </Navbar>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
