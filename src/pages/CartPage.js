import React from 'react'
import './CartPage.css'
import CartSaleSummary from '../components/cart_page_components/CartSaleSummary'

function CartCarCard(){
  return (
          <div className='cartcard'>
            <div className='cartcardimage'></div>
            <div className='cartcardinfo'>
              <div className='cartcarnameanddelete'>
                <div className='cartcarname'>Porsche 911 GT3</div>
                <div className='cartcardelete'></div>
              </div>
              
              <div className='cartcarproperties'>2024 Model Guards Red Performance Exhaust</div>
              <div className='cartcarsaletypeandperioddiv'>  
                <div className='cartcarsaletypeandperiodrow'>
                  <div className='cartcarsaletypeandperiodtitle'>Rental Period</div>
                  <div className='cartcarsaletypeandperiodtitle'>Daily Rate</div>
                </div>
                <div className='cartcarsaletypeandperiodrow'>
                  <div className='cartcarsaletypeandperiod'>Oct 12 - Oct 15</div>
                  <div className='cartcarsaletypeandperiod'>$1,250</div>
                </div>
              </div>
              <div className='cartcarprice'>$3,750</div>
            </div>
          </div>
  )
}

export default function CartPage() {
  return (
    <div className='cartMainBody'>
      <div className='cartyourselection'>Your Selection</div>
      <div className='cartview'>
        <div className='cartcars'>
          <CartCarCard/>
          <CartCarCard/>
        </div>
        <CartSaleSummary checkoutcompletetext='PROCEED TO CHECKOUT'/>
      </div>
    </div>
  )
}
