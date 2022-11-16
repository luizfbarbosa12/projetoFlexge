import React, { useContext } from "react";
import { Button, Form, Input } from "antd";
import { Layout } from "antd";
import { LoginContainer, LogoFlexge } from "./styles";
import logo from "../../assets/logo-flexge.png";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
const { Header } = Layout;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [form, onChange] = useForm({ email: "", password: "" });

  const handleClickLogin = () => {
    axios
      .post("http://localhost:3001/auth/login", form)
      .then((response) => {
        setCurrentUser(response.data.user.name);
        localStorage.setItem("token", response.data.token);
        navigate("/contracts");
      })
      .catch((err) => console.log(err));
  };

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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please insert your email!",
              },
            ]}
          >
            <Input name="email" value={form.email} onChange={onChange} />
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
            <Input.Password
              name="password"
              value={form.password}
              onChange={onChange}
            />
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
