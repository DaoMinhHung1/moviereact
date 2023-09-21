import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Layout, message } from "antd";
import "../../LayoutCss/home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // const information = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login/auth",
        {
          email: email,
          password: password,
        }
      );

      message.success("Đăng nhập thành công", 3);
      navigate("/login");
    } catch (error) {
      console.log(error);
      message.error("Đăng nhập thất bại", 3);
    }
  };

  return (
    <div className="form-container">
      <Form className="login" name="login" onFinish={handleLogin}>
        <Form.Item
          label={<span style={{ color: "white" }}>Email</span>}
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email!",
            },
          ]}
        >
          <Input
            style={{ width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "white" }}>Mật Khẩu</span>}
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password
            style={{ width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox style={{ color: "white" }}>Ghi nhớ tôi</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          <Link to="/register" className="ms-5">
            <Button type="primary">Đăng ký</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
