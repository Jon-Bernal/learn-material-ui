import React from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
