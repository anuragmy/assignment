import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { DashboardStyle } from "./pages/Dashboard/styles";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <DashboardStyle>
        <Dashboard />
      </DashboardStyle>
    );
  }
}

export default App;
