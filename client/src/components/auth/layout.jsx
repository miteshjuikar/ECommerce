import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
        <div>
            <h1>Welcome to ECommerce</h1>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout