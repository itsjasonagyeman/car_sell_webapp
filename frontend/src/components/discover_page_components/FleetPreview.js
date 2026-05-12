import React, { useEffect, useState } from 'react'
import './FleetPreview.css'
import { Link } from 'react-router-dom'

function FleetPreviewCard({image, primaryname, saletype, secondaryname, price, rentduration, speed, enginetype, geartype, id}){
    return(
        <div className='fleetpreviewcard'>
                <div className='fleetpreviewimage' style={{backgroundColor: image}}></div>
                <div className='fleetpreviewcartype'>
                    <div className='fleetpreviewcartypename'>{primaryname}</div>
                    <div className='fleetpreviewcartypesale'>{saletype}</div>                    
                </div>
                <div className='fleetpreviewcarname'>
                    <div className='fleetpreviewcartitle'>{secondaryname}</div>
                    <div className='fleetpreviewcarprice'>
                        <div className='fleetpreviewcarpriceamount'>${price}</div>
                        <div className='fleetpreviewcarduration'>{rentduration}</div>
                    </div>
                </div>
                <div className='fleetpreviewcarproperties'>
                    <div>{speed} MPH</div>
                    <div>{enginetype}</div>
                    <div>{geartype}</div>
                </div>
                <div className='fleetpreviewdetails'>
                    <Link to={`/cardetails/${id}`} className='fleetpreviewdetailsbutton'>VIEW DETAILS</Link>
                </div>
        </div>
    )
}

export default function FleetPreview() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/cars/car')
        .then(res => res.json())
        .then(data => setCars(data.slice(0,3)))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='fleetpreviewmainbody'>
        <div className='fleetpreviewbar'>
            <div className='fleetpreviewtitle'>Available Fleet</div>
            <Link to='/search' className='fleetpreviewviewall'>VIEW ALL INVENTORY</Link>
        </div>
        <div className='fleetpreviewcardsdiv'>
            {cars.map((car,index)=>{
                return <FleetPreviewCard
                key={car.id}
                id={car.id}
                image={car.image}
                primaryname = {car.primary_name}
                secondaryname={car.secondary_name}
                saletype={car.sale_type}
                price={car.price}
                rentduration= '/DAY'
                speed={car.speed}
                enginetype={car.engine_type}
                geartype={car.gear_type}
                />
            })}
        </div>
    </div>
  )
}
