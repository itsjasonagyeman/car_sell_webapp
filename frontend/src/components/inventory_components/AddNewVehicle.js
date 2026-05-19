import React, { useState } from 'react'
import './AddNewVehicle.css'

export default function AddNewVehicle({setShowAddNewPopup, setInventoryCars}) {
    const [formData, setFormData] = useState({
        primaryname : '',
        secondaryname: '',
        saletype: '',
        price: '',
        speed: '',
        enginetype: '',
        geartype:'',
        engine: '',
        image: '',
    })
    function addToInventory(){
        fetch(`http://127.0.0.1:8000/cars/car`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                primary_name: formData.primaryname,
                secondary_name: formData.secondaryname,
                sale_type: formData.saletype,
                price: Number(formData.price),
                speed: Number(formData.speed),
                engine_type: formData.enginetype,
                gear_type: formData.geartype,
                engine: formData.engine,
                image: formData.image
            })
        })
        .then(res => res.json())
        .then(newCar => {
            setInventoryCars(prev => [...prev, newCar])
            setShowAddNewPopup(false)})
        .catch(err => console.log(err))

    }

  return (
    <div className='addnewvehiclemainbody'>
        <div className='addnewvehicleform'>
            <div className='addnewvehicleheader'>
                <div className='addnewvehicleformtitle'>ADD NEW VEHICLE</div>
                <div className='addnewvehicleclose' onClick={()=> setShowAddNewPopup(false)}></div>
            </div>
            <input type='text' placeholder='CAR BRAND' className='formtext' onChange={(e) => setFormData({
                ...formData,
                primaryname: e.target.value
            })}/>
            <input type='text' placeholder='CAR MODEL' className='formtext' onChange={(e)=> setFormData({
                ...formData,
                secondaryname: e.target.value
            })}/>
            <select className='formselect' onChange={(e) => setFormData({
                ...formData,
                saletype: e.target.value,
            })}>
                <option value='' disabled>CAR  STATUS</option>
                <option value='RENT'>RENT</option>
                <option value='SALE'>SALE</option>
            </select>
            <input type='text' placeholder='PRICE' className='formtext' onChange={(e) => setFormData({
                ...formData,
                price: e.target.value,
            })}/>
            <input type='text' placeholder='SPEED IN MPH' className='formtext' onChange={(e) => setFormData({
                ...formData,
                speed: e.target.value,
            })}/>
            <select className='formselect' onChange={(e) => setFormData({
                ...formData,
                enginetype: e.target.value,
            })}>
                <option value='' disabled>ENGINE TYPE</option>
                <option value='GAS'>GAS</option>
                <option value='ELECTRIC'>ELECTRIC</option>
                <option value='HYBRID'>HYBRID</option>
            </select>
            <select className='formselect' onChange={(e) => setFormData({
                ...formData,
                geartype: e.target.value,
            })}>
                <option value='' disabled>TRANSMISSION</option>
                <option value='MANUAL' >MANUAL</option>
                <option value='AUTOMATIC'>AUTOMATIC</option>
            </select>
            <input type='text' placeholder='ENGINE' className='formtext' onChange={(e)=> setFormData({
                ...formData,
                engine: e.target.value,
            })}/>
            <input type='text' placeholder='IMAGE' className='formtext' onChange={(e) => setFormData({
                ...formData,
                image: e.target.value,
            })}/>
            <div className='addnewvehicledone' onClick={()=>{addToInventory()}}>DONE</div>
        </div>
    </div>
  )
}
