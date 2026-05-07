import React from 'react'
import './Spotlight.css'

export default function Spotlight() {
  return (
    <div className='spotlightmainbody'>
        <div className='spotlightinfo'>
            <div className='spotlightheader'>Spotlight</div>
            <div className='spotlightcarname'>Car Name</div>
            <div className='spotlightcardescription'>
                SpotlightSpotlightSpotlightSpotlightSpotlightSpotlightSpotlight
                SpotlightSpotlightSpotlightSpotlightSpotlightSpotlightSpotlight
                SpotlightSpotlightSpotlightSpotlightSpotlightSpotlightSpotlight
            </div>
            <div className='spotlightcarpricing'>
                <div className='spotlightcarsaletype'>FOR&nbsp;SALE</div>
                <div className='spotlightcarprice'>$2500</div>
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
