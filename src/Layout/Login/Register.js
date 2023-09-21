import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "../../LayoutCss/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name: name,
        email: email,
        password: password,
      });

      message.success("Đăng ký thành công");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="form-container">
      <Form onFinish={handleRegister}>
        <Form.Item
          label={<span style={{ color: "white" }}>Tên</span>}
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên đăng nhập!",
            },
          ]}
        >
          <Input
            style={{ width: "100%" }}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

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
          label={<span style={{ color: "white" }}>Password</span>}
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
