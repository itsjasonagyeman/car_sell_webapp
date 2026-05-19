import React, { useState } from 'react'
import './UpdateVehicle.css'

export default function UpdateVehicle({setShowUpdatePopup, updateID, inventorycars, updateindex, setInventoryCars}) {
    const [formData, setFormData] = useState({
        primaryname : inventorycars[updateindex].primary_name,
        secondaryname: inventorycars[updateindex].secondary_name,
        saletype: inventorycars[updateindex].sale_type,
        price: inventorycars[updateindex].price,
        speed: inventorycars[updateindex].speed,
        enginetype: inventorycars[updateindex].engine_type,
        geartype: inventorycars[updateindex].gear_type,
        engine: inventorycars[updateindex].engine,
        image: inventorycars[updateindex].image,
    })
    function updateCar(id){
        fetch(`http://127.0.0.1:8000/cars/car/${id}`, {
            method: 'PUT',
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
        .then((updatedCar) => {
            setInventoryCars((prev) => {
                return prev.map((car) =>{
                    if (car.id === id){
                        return updatedCar
                    }
                    else {
                        return car
                    }
                })
            })
        })
        .catch(err => console.log(err))
    }
    return(
    <div className='addnewvehiclemainbody'>
        <div className='addnewvehicleform'>
            <div className='addnewvehicleheader'>
                <div className='addnewvehicleformtitle'>UPDATE VEHICLE</div>
                <div className='addnewvehicleclose' onClick={()=> setShowUpdatePopup(false)}></div>
            </div>
            <input type='text' placeholder='CAR BRAND' className='formtext' value ={formData.primaryname} 
            onChange={(e)=> setFormData(prev => ({
                ...prev,
                primaryname: e.target.value
            }))}/>
            <input type='text' placeholder='CAR MODEL' className='formtext' value ={formData.secondaryname} onChange={(e)=> setFormData(prev => ({
                ...prev,
                secondaryname: e.target.value
            }))}/>
            <select className='formselect' value ={formData.saletype} onChange={(e)=> setFormData(prev => ({
                ...prev,
                saletype: e.target.value
            }))}>
                <option value='' disabled>CAR  STATUS</option>
                <option value='RENT'>RENT</option>
                <option value='SALE'>SALE</option>
            </select>
            <input type='text' placeholder='PRICE' className='formtext' value ={formData.price} onChange={(e)=> setFormData(prev => ({
                ...prev,
                price: e.target.value
            }))}/>
            <input type='text' placeholder='SPEED IN MPH' className='formtext' value ={formData.speed} onChange={(e)=> setFormData(prev => ({
                ...prev,
                speed: e.target.value
            }))}/>
            <select className='formselect' value ={formData.enginetype} onChange={(e)=> setFormData(prev => ({
                ...prev,
                enginetype: e.target.value
            }))}>
                <option value='' disabled>ENGINE TYPE</option>
                <option value='GAS'>GAS</option>
                <option value='ELECTRIC'>ELECTRIC</option>
                <option value='HYBRID'>HYBRID</option>
            </select>
            <select className='formselect' value ={formData.geartype} onChange={(e)=> setFormData(prev => ({
                ...prev,
                geartype: e.target.value
            }))}>
                <option value='' disabled>TRANSMISSION</option>
                <option value='MANUAL' >MANUAL</option>
                <option value='AUTOMATIC'>AUTOMATIC</option>
            </select>
            <input type='text' placeholder='ENGINE' className='formtext' value ={formData.engine} onChange={(e)=> setFormData(prev => ({
                ...prev,
                engine: e.target.value
            }))}/>
            <input type='text' placeholder='IMAGE' className='formtext' value ={formData.image} onChange={(e)=> setFormData(prev => ({
                ...prev,
                image: e.target.value
            }))}/>
            <div className='addnewvehicledone' onClick={()=>{setShowUpdatePopup(false); updateCar(updateID)}}>DONE</div>
        </div>
    </div>
    )
}
