import React from 'react'
import './FleetPreview.css'

function FleetPreviewCard(){
    return(
        <div className='fleetpreviewcard'>
                <div className='fleetpreviewimage'></div>
                <div className='fleetpreviewcartype'>
                    <div className='fleetpreviewcartypename'>LUXURY SEDAN</div>
                    <div className='fleetpreviewcartypesale'>RENTAL</div>                    
                </div>
                <div className='fleetpreviewcarname'>
                    <div className='fleetpreviewcartitle'>Stratus Executive</div>
                    <div className='fleetpreviewcarprice'>
                        <div className='fleetpreviewcarpriceamount'>$850</div>
                        <div className='fleetpreviewcarduration'>/DAY</div>
                    </div>
                </div>
                <div className='fleetpreviewcarproperties'>
                    <div>195 MPH</div>
                    <div>HYBRID</div>
                    <div>AUTO</div>
                </div>
                <div className='fleetpreviewdetails'>
                    <div className='fleetpreviewdetailsbutton'>VIEW DETAILS</div>
                </div>
        </div>
    )
}

export default function FleetPreview() {
  return (
    <div className='fleetpreviewmainbody'>
        <div className='fleetpreviewbar'>
            <div className='fleetpreviewtitle'>Available Fleet</div>
            <div className='fleetpreviewviewall'>VIEW ALL INVENTORY</div>
        </div>
        <div className='fleetpreviewcardsdiv'>
            <FleetPreviewCard/>
            <FleetPreviewCard/>
            <FleetPreviewCard/>
        </div>
    </div>
  )
}
