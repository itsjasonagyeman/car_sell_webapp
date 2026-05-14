import React from 'react'
import './AddNewVehicle.css'

export default function AddNewVehicle({setShowAddNewPopup}) {
  return (
    <div className='addnewvehiclemainbody'>
        <div className='addnewvehicleform'>
            <div className='addnewvehicleheader'>
                <div className='addnewvehicleformtitle'>ADD NEW VEHICLE</div>
                <div className='addnewvehicleclose' onClick={()=> setShowAddNewPopup(false)}></div>
            </div>
            <input type='text' placeholder='CAR BRAND' className='formtext'/>
            <input type='text' placeholder='CAR MODEL' className='formtext'/>
            <select className='formselect'>
                <option value='' disabled>CAR  STATUS</option>
                <option value='RENT'>RENT</option>
                <option value='SALE'>SALE</option>
            </select>
            <input type='text' placeholder='PRICE' className='formtext'/>
            <input type='text' placeholder='SPEED IN MPH' className='formtext'/>
            <select className='formselect'>
                <option value='' disabled>ENGINE TYPE</option>
                <option value='GAS'>GAS</option>
                <option value='ELECTRIC'>ELECTRIC</option>
                <option value='HYBRID'>HYBRID</option>
            </select>
            <select className='formselect'>
                <option value='' disabled>TRANSMISSION</option>
                <option value='MANUAL' >MANUAL</option>
                <option value='AUTOMATIC'>AUTOMATIC</option>
            </select>
            <input type='text' placeholder='ENGINE' className='formtext'/>
            <input type='text' placeholder='IMAGE' className='formtext'/>
            <div className='addnewvehicledone' onClick={()=>{setShowAddNewPopup(false)}}>DONE</div>
        </div>
    </div>
  )
}
