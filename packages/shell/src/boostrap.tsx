import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";

const Navbar1 = React.lazy(() => import("app01/Navbar"));
const Button = React.lazy(() => import("app2/BasicComponent"));
const Feature2 = React.lazy(() => import("app2/Feature"));

const App = () => (
  <ChakraProvider>
    <Navbar>
      <Feature />
      <React.Suspense fallback="Loading navbar 2">
        {/* <Navbar1 /> */}
      </React.Suspense>
      <React.Suspense fallback="Loading Feature 02">
        {/* <Feature2 /> */}
      </React.Suspense>
    </Navbar>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
