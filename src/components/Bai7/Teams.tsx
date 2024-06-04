import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Teams() {
  return (
    <div>
        <div className="p-4">
            <h1>Teams Page</h1>
            <Outlet />
        </div>
    </div>
  )
}
