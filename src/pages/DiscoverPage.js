import React from 'react'
import './DiscoverPage.css'
import Spotlight from '../components/discover_page_components/Spotlight'
import FleetPreview from '../components/discover_page_components/FleetPreview'

export default function DiscoverPage() {
  return (
    <div className='discoverMainBody'>
        <div className='spotlightdiv'>
            <Spotlight/>
        </div>
        <div className='fleetpreviewdiv'>
            <FleetPreview/>
        </div>
        <div className='footer'>Footer</div>
    </div>
  )
}
