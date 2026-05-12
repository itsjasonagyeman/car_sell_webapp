import React from 'react'
import './Filter.css'

export default function Filter() {
  return (
          <div className='filtercarsdiv'>
            <div className='filtercarstitle'>
                <div className='filtertitle'>FILTERS</div>
                <div className='filterclear'>Clear all</div>
            </div>
            <div className='filtercarsbybrand'>
                <div className='brandtitle'>BRAND</div>
                <div className='brand'>
                    <input type='checkbox' className='checkbox'/>
                    Ferrari
                </div>
                <div className='brand'>
                    <input type='checkbox' className='checkbox'/>
                    Porsche
                </div>
                <div className='brand'>
                    <input type='checkbox' className='checkbox'/>
                    Lamborghini
                </div>
                <div className='brand'>
                    <input type='checkbox' className='checkbox'/>
                    McLaren
                </div>
            </div>
            <div className='filtercarsbyrate'>
                <div className='ratetitle'>DAILY RATE</div>
                <div className='rateslider'>
                    <input type="range" min="0" max="100" value="50" id="slider"></input>
                </div>
                <div className='ratepricing'>
                    <div className='lowestratepricing'>$200</div>
                    <div className='highestratepricing'>$5000+</div>
                </div>
            </div>
            <div className='filtercarsbycategory'>
                <div className='categorytitle'>CATEGORY</div>
                <div className='category'>Hypercar</div>
                <div className='category'>Sports</div>
                <div className='category'>Luxury SUV</div>
            </div>
            <div className='filtercarsbytransmission'>
                <div className='transmissiontitle'>TRANSMISSION</div>
                <div className='transmissiontypediv'>
                    <div className='transmissiontypeauto'>Automatic</div>
                    <div className='transmissiontypemanual'>Manual</div>
                </div>
            </div>
        </div>
  )
}
