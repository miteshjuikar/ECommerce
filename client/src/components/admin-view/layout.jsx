import React from 'react'
import AdminSidebar from './sidebar'
import AdminHeader from './header'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <div>
        <AdminSidebar />
        <div>
          <AdminHeader />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout