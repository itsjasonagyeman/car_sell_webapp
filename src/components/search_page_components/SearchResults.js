import React from 'react'
import './SearchResults.css'

function SearchResultsCarCard(){
  return(
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
                        <div className='searchcardcarproperty'>502 HP</div>
                        <div className='searchcardcarproperty'>3.2s</div>
                        <div className='searchcardcarproperty'>MANUAL</div>
                    </div>
                    <div className='searchcardcarviewdetails'>
                        <div className='searchcardviewdetailsbutton'>VIEW DETAILS</div>
                    </div>
                </div>
  )
}

export default function SearchResults() {
  return (
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
                <SearchResultsCarCard/>
                <SearchResultsCarCard/>
                <SearchResultsCarCard/>
            </div>    
            <div className='searchcarcardrow'>
                <SearchResultsCarCard/>
                <SearchResultsCarCard/>
                <SearchResultsCarCard/>
            </div>    
            <div className='changesearchresultsrow'>
              <div className='changesearchresultnum'>1</div>
              <div className='changesearchresultnum'>2</div>
              <div className='changesearchresultnum'>3</div>
              <div className='changesearchresultnum'>&gt;</div>
            </div>
        </div>
  )
}
