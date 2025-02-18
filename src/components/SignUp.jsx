import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/signup/', values);
      if (response.status === 201) {
        message.success('Registration successful!');
        navigate('/login');
      }
    } catch (error) {
      message.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2851E3] px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Create Account
        </h1>
        <Form
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-6"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="USERNAME"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input
              placeholder="EMAIL"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 8, message: 'Password must be at least 8 characters!' }
            ]}
          >
            <Input.Password
              placeholder="PASSWORD"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white [&>input]:text-white [&>.ant-input-password-icon]:text-white"
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="CONFIRM PASSWORD"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white [&>input]:text-white [&>.ant-input-password-icon]:text-white"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full rounded-md bg-white py-6 text-[#2851E3] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2851E3] disabled:bg-gray-300"
          >
            SIGN UP
          </Button>

          <div className="mt-6 text-center">
            <span className="text-white">Already have an account? </span>
            <Link
              to="/login"
              className="text-white font-semibold hover:underline focus:outline-none"
            >
              Login here
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp; 