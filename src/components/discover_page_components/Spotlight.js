import React from 'react'
import './Spotlight.css'

export default function Spotlight() {
    const spotlightCarName = 'Ferrari'
    const spotlightCarDescription = 'A very fast car'
    const spotlightCarSaleType = 'RENT'
    const spotlightCarPrice = '2500/DAY'
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
                <div className='spotlightcardetailsbutton'>See&nbsp;More</div>
            </div>
        </div>
        <div className='spotlightimage'>
            <div className='spotlightcarimage'></div>
            <div className='spotlightcarinformation'></div>
        </div>
    </div>
  )
}
