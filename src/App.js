import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./pages";

function App() {
  return (
    <BrowserRouter basename="/">
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
