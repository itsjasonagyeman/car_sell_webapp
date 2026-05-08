import React from 'react'
import './FleetPreview.css'

function FleetPreviewCard({name, type, title, amount, duration, mph, engine, transmission}){
    return(
        <div className='fleetpreviewcard'>
                <div className='fleetpreviewimage'></div>
                <div className='fleetpreviewcartype'>
                    <div className='fleetpreviewcartypename'>{name}</div>
                    <div className='fleetpreviewcartypesale'>{type}</div>                    
                </div>
                <div className='fleetpreviewcarname'>
                    <div className='fleetpreviewcartitle'>{title}</div>
                    <div className='fleetpreviewcarprice'>
                        <div className='fleetpreviewcarpriceamount'>${amount}</div>
                        <div className='fleetpreviewcarduration'>{duration}</div>
                    </div>
                </div>
                <div className='fleetpreviewcarproperties'>
                    <div>{mph} MPH</div>
                    <div>{engine}</div>
                    <div>{transmission}</div>
                </div>
                <div className='fleetpreviewdetails'>
                    <div className='fleetpreviewdetailsbutton'>VIEW DETAILS</div>
                </div>
        </div>
    )
}

export default function FleetPreview() {
    const nameList = ['SEDAN', 'LEXUS', 'FERRARI']
    const typeList = ['RENTAL', 'SALE', 'SALE']
    const titleList = ['Stratus Executive', 'Ferrari', 'Bugatti']
    const amountList = ['800', '800,000', '1,000,000']
    const durationList = ['/DAY', '', '']
    const mphList = ['195', '200', '250']
    const engineList = ['HYBRID', 'ELECTRIC', 'GAS']
    const transmissionList = ['AUTO', 'MECHANICAL', 'AUTO']
  return (
    <div className='fleetpreviewmainbody'>
        <div className='fleetpreviewbar'>
            <div className='fleetpreviewtitle'>Available Fleet</div>
            <div className='fleetpreviewviewall'>VIEW ALL INVENTORY</div>
        </div>
        <div className='fleetpreviewcardsdiv'>
            <FleetPreviewCard name={nameList[0]} type={typeList[0]} title={titleList[0]} amount={amountList[0]} duration={durationList[0]} mph={mphList[0]} engine={engineList[0]} transmission={transmissionList[0]}/>
            <FleetPreviewCard name={nameList[1]} type={typeList[1]} title={titleList[1]} amount={amountList[1]} duration={durationList[1]} mph={mphList[1]} engine={engineList[1]} transmission={transmissionList[1]}/>
            <FleetPreviewCard name={nameList[2]} type={typeList[2]} title={titleList[2]} amount={amountList[2]} duration={durationList[2]} mph={mphList[2]} engine={engineList[2]} transmission={transmissionList[2]}/>
        </div>
    </div>
  )
}
