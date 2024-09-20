import React from 'react'
import ShoppingHeader from './header'
import { Outlet } from 'react-router-dom'

function ShoppingLayout() {
  return (
    <div>
      <div>
        <ShoppingHeader/>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default ShoppingLayout
