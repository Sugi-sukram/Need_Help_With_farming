import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', formData);
    // After successful login, navigate to dashboard or home
    // navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2851E3] px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Login Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white py-3 text-[#2851E3] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2851E3]"
          >
            LOGIN
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link
            to="/forgot-password"
            className="text-white hover:underline focus:outline-none"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 