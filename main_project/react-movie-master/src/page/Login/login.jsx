import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthenApi from "../../api/AuthenApi";
import "./login.css";
export default function Login() {
  const [token, setToken] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  let approvedToken = "";
  const onFinish = (values) => {
    AuthenApi.CreateRequestToken().then((res) => {
      setToken(res);
      localStorage.setItem("approve_token", res);
      window.location.replace(
        `https://www.themoviedb.org/authenticate/${res}?redirect_to=http://localhost:3000/login`
      );
    });
  };
  const createSessionFunc = (approvedToken) => {
    if (location.search === `?request_token=${approvedToken}&denied=true`) {
      alert("You are denied permission, please try again");
    } else if (
      location.search === `?request_token=${approvedToken}&approved=true`
    ) {
      AuthenApi.CreateSession({ approvedToken }).then((res) => {
        // localStorage.setItem("token", approvedToken);
        localStorage.setItem("session_id", res);
        navigate("/home", { replace: "true" });
      });
    }
  };

  useEffect(() => {
    approvedToken = localStorage.getItem("approve_token");
    if (approvedToken !== undefined && approvedToken !== null) {
      createSessionFunc(approvedToken);
    }
  }, [token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#CCC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
