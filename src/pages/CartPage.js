import React from 'react'
import './CartPage.css'

function CartCarCard(){
  return (
          <div className='cartcard'>
            <div className='cartcardimage'></div>
            <div className='cartcardinfo'>
              <div className='cartcarname'>Porsche 911 GT3</div>
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
        <div className='cartoverview'>
          <div className='cartsalesummary'>Sale Summary</div>
          <div className='cartsalepropertyandprice'>
            <div className='cartsaleproperty'>Subtotal</div>
            <div className='cartsalevalue'>$8,000</div>
          </div>
          <div className='cartsalepropertyandprice'>
            <div className='cartsaleproperty'>Tax(8%)</div>
            <div className='cartsalevalue'>$1,000</div>
          </div>
          <div className='cartsalepropertyandprice'>
            <div className='cartsaleproperty'>Maintenance(2.5%)</div>
            <div className='cartsalevalue'>$1,000</div>
          </div>
          <div className='cartsalefullprice'>
            <div className='cartsaletotaltitle'>TOTAL</div>
            <div className='cartsaletotalprice'>$10,000</div>
          </div>
          <div className='proceedtocheckoutbutton'>PROCEED TO CHECKOUT</div>
          <div className='guaranteecard'>
            <div className='guaranteedsecurity'>GUARANTEED SECURITY</div>
            <div className='datasecurity'>Your data is protected by industry-standard encryption protocols</div>
          </div>
        </div>
      </div>
    </div>
  )
}
