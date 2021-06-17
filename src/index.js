import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

const App = () => {
  return (
    <Grid container>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid container>
        <Grid item>
          <Sidebar className="sidebar" />
        </Grid>
        <Grid item>
          <Content className="content" />
        </Grid>
      </Grid>
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
