import React, { useEffect, useState } from 'react'
import './CarDetailsPage.css'
import { Link, useParams } from 'react-router-dom'

function CarDetailsProperty({propertyname, propertyvalue, propertyinfo}){
  return(
    <div className='cardetailsproperty'>
      <div className='cardetailspropertytitle'>{propertyname}</div>
      <div className='cardetailspropertyvalue'>{propertyvalue}</div>
      <div className='cardetailspropertyinfo'>{propertyinfo}</div>
    </div>
  )
}

export default function CarDetailsPage() {
  const {id} = useParams()
  const [car, setCar] = useState(null)
  useEffect(()=> {
    fetch(`http://127.0.0.1:8000/cars/car/${id}`)
    .then(res => res.json())
    .then(data => setCar(data))
    .catch(err => console.log(err))
  }, [id])

  if (!car) return <div>Loading...</div>
  return (
    <div className='cardetailsmainbody'>
      <div className='cardetailsimages'>
        <div className='primarycarimage'></div>
        <div className='secondarycarimages'>
          <div className='secondarycarimage'></div>
          <div className='secondarycarimage'></div>
        </div>
      </div>

      <div className='cardetailsinfo'>
        <div className='cardetailsperformance'>
          <div className='cardetailsperfomancetext'>{car.primary_name}</div>
          <div className='cardetailspricetitle'>Price Per Day</div>
        </div>
        <div className='cardetailsnameandprice'>
          <div className='cardetailsname'>{car.secondary_name}</div>
          <div className='cardetailsprice'>${car.price}</div>
        </div>
        <div className='cardetailsdescriptionandbutton'>
          <div className='cardetailsdescription'>diuhhxewchwiecbwiucbwicbiuwc</div>
          <Link to='/cart' className='cardetailsbutton'>RENT VEHICLE</Link>
        </div>
      </div>
      
      <div className='cardetailsproperties'>
        <CarDetailsProperty propertyname='SPEED' propertyvalue={car.speed} propertyinfo='MPH'/>
        <CarDetailsProperty propertyname= 'ENGINE TYPE' propertyvalue={car.engine_type} propertyinfo='Diesel'/>
        <CarDetailsProperty propertyname= 'TRANSMISSION' propertyvalue={car.gear_type} propertyinfo='Gear Type'/>
      </div>
    </div>
  )
}
