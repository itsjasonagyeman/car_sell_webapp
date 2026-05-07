import React from 'react'
import './SearchPage.css'
import Filter from '../components/search_page_components/Filter'

export default function SearchPage() {
  return (
    <div className='searchMainBody'>
        <Filter/>
        <div className='searchresults'>
            <div className='bigsearchbar'>
                <input type='text' placeholder='Search' className='search'/>
                <div className='sortby'>
                    <div className='sortbytitle'>SORT BY</div>
                    <div className='sortbyprice'>PRICE:</div>
                </div>
            </div>
            <div className='showingsearchresults'>
                <div style={{display: 'flex',flexDirection: 'row'}}>Showing<div style={{fontWeight:'bold'}}>&nbsp;12&nbsp;</div>results</div>
                <div className='searchview'>
                    <div className='tileview'>T</div>
                    <div className='listview'>L</div>
                </div>
        
            </div>
            <div className='searchcarcardrow'>
                <div className='searchcarcard'>
                    <div className='searchcarcardimage'></div>
                    <div className='searchcardcarinfo'>
                        <div className='searchcardcarname'>Porsche 911 GT3</div>
                        <div className='searchcardcarprice'>
                            $850
                            <div style={{
                                color: '#64648B',
                                fontSize:'15px',
                                fontWeight: '500'
                            }}>/day</div>
                        </div>
                    </div>
                    <div className='searchcardcarproperties'>
                        <div className='searchcardcarproperty'></div>
                        <div className='searchcardcarproperty'></div>
                        <div className='searchcardcarproperty'></div>
                    </div>
                    <div className='searchcardcarviewdetails'>
                        <div className='searchcardviewdetailsbutton'>VIEW DETAILS</div>
                    </div>
                </div>
            </div>    

        </div>
    </div>
  )
}
