import React from "react";
import "./App.css";
import Router from "./router/Router";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { Breadcrumb, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Router />
      <Footer style={{ textAlign: "center" }}>Created by Luiz Barbosa</Footer>
    </Layout>
  );
};

export default App;
