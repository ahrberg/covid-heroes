import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
