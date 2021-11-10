import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Home from "./Home";
import { useTheme } from "@mui/material/styles";

export default function TabLinks() {
  const [nav, setNav] = React.useState("home");

  const handleChange = (event, value) => {
    setNav(value);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs
          value={nav}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab value="home" label="Home" />
          <Tab value="todos" label="My Todos" />
        </Tabs>
      </AppBar>
      {nav === "home" && <div>Home page</div>}
      {nav === "todos" && <Home />}
    </div>
  );
}
