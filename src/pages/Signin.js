import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Admin } from "../features/admin/adminSlice";

function Signin() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const authState = useSelector((state) => state);
  const { admin, isError, isSuccess } = authState.admin;
  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      await dispatch(Admin(values));
      message.success("Logged in successfully");
      setIsLoading(false);
      navigate("/main");
    } catch (error) {
      message.error("Invalid email or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={20} sm={16} md={12} lg={8}>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Signin;