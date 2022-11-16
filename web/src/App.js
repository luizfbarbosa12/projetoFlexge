import React from "react";
import "./App.css";
import Router from "./router/Router";
import { Layout } from "antd";
import { UserState } from "./contexts/UserState";

const App = () => {
  return (
    <Layout className="layout">
      <UserState>
        <Router />
      </UserState>
    </Layout>
  );
};

export default App;
