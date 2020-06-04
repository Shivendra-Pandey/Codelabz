import React, { useState } from "react";
import { Alert, Button, Form, Input } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
  UserOutlined,
  GlobalOutlined
} from "@ant-design/icons";

const UserSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async values => {
    setError("");
    setLoading(true);
    try {
      console.log(values);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      {error && (
        <Alert
          message={""}
          description={error}
          type="error"
          closable
          className="login-error"
        />
      )}
      <Form onFinish={onSubmit}>
        <Form.Item
          name={"us_name"}
          rules={[
            {
              required: true,
              message: "Please input your name"
            },
            {
              type: "string",
              message: "Please enter a valid name"
            }
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Your Name"
          />
        </Form.Item>
        <Form.Item
          name={"us_handle"}
          rules={[
            {
              required: true,
              message: "Please input your handle"
            },
            {
              type: "regexp",
              pattern: new RegExp(/^[a-z0-9]+$/g),
              message:
                "User handle should only contain lowercase alphanumeric characters"
            }
          ]}
        >
          <Input
            prefix={<UserAddOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Your Handle"
          />
        </Form.Item>
        <Form.Item
          name={"us_email"}
          rules={[
            {
              required: true,
              message: "Please input your email address"
            },
            {
              type: "email",
              message: "Please enter a valid email address"
            }
          ]}
        >
          <Input
            prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name={"us_country"}
          rules={[
            {
              required: true,
              message: "Please input your country"
            },
            {
              type: "string",
              message: "Please enter your country"
            }
          ]}
        >
          <Input
            prefix={<GlobalOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Country"
          />
        </Form.Item>
        <Form.Item
          name="us_password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["us_password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("us_password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              }
            })
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Confirm password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {loading ? "Signing up..." : "Create User Account"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserSignUp;
