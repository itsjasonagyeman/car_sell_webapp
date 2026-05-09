import React from 'react'
import './CarDetailsPage.css'

function CarDetailsProperty(){
  return(
    <div className='cardetailsproperty'>
      <div className='cardetailspropertytitle'>POWER</div>
      <div className='cardetailspropertyvalue'>502</div>
      <div className='cardetailspropertyinfo'>Great Horsepower</div>
    </div>
  )
}

export default function CarDetailsPage() {
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
          <div className='cardetailsperfomancetext'>Track-Ready Performance</div>
          <div className='cardetailspricetitle'>Price Per Day</div>
        </div>
        <div className='cardetailsnameandprice'>
          <div className='cardetailsname'>PORSCHE 911 GT3(922)</div>
          <div className='cardetailsprice'>$1,250</div>
        </div>
        <div className='cardetailsdescriptionandbutton'>
          <div className='cardetailsdescription'>diuhhxewchwiecbwiucbwicbiuwc</div>
          <div className='cardetailsbutton'>RENT VEHICLE</div>
        </div>
      </div>
      
      <div className='cardetailsproperties'>
        <CarDetailsProperty/>
        <CarDetailsProperty/>
        <CarDetailsProperty/>
        <CarDetailsProperty/>
      </div>
    </div>
  )
}
