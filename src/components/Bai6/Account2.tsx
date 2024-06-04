import React from 'react'

export default function Account2() {
    const role = localStorage.getItem('role');
  return (
    <div>
         <div className="p-4">
            <h1>Account Page</h1>
            <p>Chào mừng đến với trang tài khoản của bạn! Vai trò của bạn là: {role}</p>
        </div>
    </div>
  )
}
