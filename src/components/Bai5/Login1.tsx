import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login1() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/account');
    };
  return (
    <div>
        <div className="p-4">
            <h1>Login Page</h1>
            <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
                Login
            </button>
        </div>
    </div>
  )
}
