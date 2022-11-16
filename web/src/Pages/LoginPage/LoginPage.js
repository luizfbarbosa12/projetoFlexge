import React from "react";
import { Button, Form, Input } from "antd";
import { Layout } from "antd";
import { LoginContainer, LogoFlexge } from "./styles";
import logo from '../../assets/logo-flexge.png'
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const LoginPage = () => {
const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate("/contracts")
  }
  
  return (
    <Layout>
      <Header>
        <LogoFlexge src={logo} alt="logo-flexge" />
      </Header>
      <LoginContainer>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={handleClickLogin} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </LoginContainer>
    </Layout>
  );
};

export default LoginPage;
