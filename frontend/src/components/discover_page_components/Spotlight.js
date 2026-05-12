import React, { useEffect, useState } from 'react'
import './Spotlight.css'
import { Link } from 'react-router-dom'

export default function Spotlight() {
    const [car, setCar] = useState(null)
    console.log(car)
    useEffect(()=> {
        fetch('http://127.0.0.1:8000/cars/car')
        .then(res => res.json())
        .then(data => setCar(data[1]))
        .catch(err => console.log(err))
    }, [])

    if (!car) return <div>Loading...</div>

    const spotlightCarName = car.primary_name
    const spotlightCarDescription = car.secondary_name
    const spotlightCarSaleType = car.sale_type
    const spotlightCarPrice = car.price

    
  return (
    <div className='spotlightmainbody'>
        <div className='spotlightinfo'>
            <div className='spotlightheader'>Spotlight</div>
            <div className='spotlightcarname'>{spotlightCarName}</div>
            <div className='spotlightcardescription'>
                {spotlightCarDescription}
            </div>
            <div className='spotlightcarpricing'>
                <div className='spotlightcarsaletype'>FOR&nbsp;{spotlightCarSaleType}</div>
                <div className='spotlightcarprice'>${spotlightCarPrice}</div>
            </div>
            <div className='spotlightcardetailsbuttondiv'>
                <Link to={`/cardetails/${car.id}`} className='spotlightcardetailsbutton'>See&nbsp;More</Link>
            </div>
        </div>
        <div className='spotlightimage'>
            <div className='spotlightcarimage' style={{backgroundColor: car.image}}></div>
            <div className='spotlightcarinformation'>
                <div className='spotlightcarspeeddiv'>
                    <div className='spotlightcarspeedheader'>0-60 MPH</div>
                    <div className='spotlightcarspeedinfo'>{car.speed}</div>
                </div>
                <div className='spotlightcarenginediv'>
                    <div className='spotlightcarengineheader'>ENGINE</div>
                    <div className='spotlightcarengineinfo'>{car.engine}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
