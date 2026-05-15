import React from 'react'
import './Bookings.css'

function CustomerCard(){
  return(
    <div className='bookingscustomercard'>
          <div className='bookingscardcustomer'>
            <div className='bookingscardcustomerimage'></div>
            <div className='bookingscardcustomerinfo'>Jason Agyeman</div>
          </div>
          <div className='bookingscardvehicle'>
            <div className='bookingscardvehiclebrand'>Ferrari</div>
            <div className='bookingscardvehiclemodel'>Ferrariri</div>
          </div>
          <div className='bookingscardperiod'>Oct 12 - Oct 15</div>
          <div className='bookingscardstatus'>In Progress</div>
          <div className='bookingscardrevenue'>$12,000</div>
          <div className='bookingscardactions'></div>
    </div>
  )
}

function BookingsPropertyCard(){
  return(
    <div className='bookingscard'>
      <div className='bookingscardtitle'>TOTAL ACTIVE BOOKINGS</div>
      <div className='bookingscardvalue'>42</div>
    </div>
  )
}

export default function Bookings() {
  return (
    <div className='mainbookingsbody'>
      <div className='bookingstitle'>Bookings</div>
      <div className='bookingscarddiv'>
        <BookingsPropertyCard/>
        <BookingsPropertyCard/>
        <BookingsPropertyCard/>
        <BookingsPropertyCard/>
      </div>
      <div className='bookingsfilterdiv'></div>
      <div className='bookingscustomertable'>
        <div className='bookingscustomertabletitles'>
          <div className='bookingscustomer'>CUSTOMER</div>
          <div className='bookingsvehicle'>VEHICLE</div>
          <div className='bookingsperiod'>BOOKING PERIOD</div>
          <div className='bookingsstatus'>STATUS</div>
          <div className='bookingsrevenue'>REVENUE</div>
          <div className='bookingsactions'>ACTIONS</div>
        </div>
        <CustomerCard/>
        <CustomerCard/>
      </div>
    </div>
  )
}
