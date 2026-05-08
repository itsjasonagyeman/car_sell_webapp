import React from 'react'
import './CartSaleSummary.css'

export default function CartSaleSummary() {
  return (
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
  )
}
