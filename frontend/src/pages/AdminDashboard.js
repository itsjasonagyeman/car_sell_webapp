import React, { useState } from 'react'
import './AdminDashboard.css'
import Inventory from './adminpages/Inventory'
import Bookings from './adminpages/Bookings'
import Settings from './adminpages/Settings'

export default function AdminDashboard() {
    const [page, setPage] = useState('inventory')
  return (
    <div className='mainadminbody'>
        <div className='adminsidebar'>
            <div className={`inventory ${(page === 'inventory') ? 'active' : ''} `} onClick={() => setPage('inventory')}>Inventory</div>
            <div className={`bookings ${(page === 'bookings') ? 'active' : ''} `} onClick={() => setPage('bookings')} >Bookings</div>
            <div className={`settings ${(page === 'settings') ? 'active' : ''} `} onClick={()=> setPage('settings')}>Settings</div>
        </div>
        <div className='adminviewspace'>
            {(page ==='inventory') && <Inventory/>}
            {(page ==='bookings') && <Bookings/>}
            {(page ==='settings') && <Settings/>}
        </div>
    </div>
  )
}
