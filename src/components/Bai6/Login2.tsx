import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const user = {
        email: 'user@example.com',
        password: 'password123',
        role: 'User',
    };

    const admin = {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'Admin',
    };

    const handleLogin = () => {
        if (
        (email === user.email && password === user.password && role === user.role) ||
        (email === admin.email && password === admin.password && role === admin.role)
        ) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('role', role);
        navigate('/account');
        } else {
        alert('Thông tin xác thực hoặc vai trò không hợp lệ');
        }
    };
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-center text-2xl font-bold mb-4">Đăng nhập</h2>
                <div className="mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="border p-2 w-full"
                />
                </div>
                <div className="mb-4">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu"
                    className="border p-2 w-full"
                />
                </div>
                <div className="mb-4">
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="">-- Chọn quyền --</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                </div>
                <button
                onClick={handleLogin}
                className="bg-blue-500 text
                white p-2 w-full rounded"
                >
                Đăng nhập
                </button>
            </div>
        </div>
    </div>
  )
}
