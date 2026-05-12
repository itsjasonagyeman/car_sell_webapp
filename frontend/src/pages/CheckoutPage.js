import React, {useState} from 'react'
import './CheckoutPage.css'
import CartSaleSummary from '../components/cart_page_components/CartSaleSummary'

function CheckoutInfo(){
  let [creditIsActive, setCreditIsActive] = useState(true)
  let [paypalIsActive, setPaypalIsActive] = useState(false)
  let [cryptoIsActive, setCryptoIsActive] = useState(false)
  return(
 <div className='checkoutinfo'>
        <div className='securecheckout'>Secure Checkout</div>
        <div className='securecheckoutdescription'></div>
        <div className='billinginfo'>BILLING INFORMATION</div>
        <div className='checkoutnameandemail'>
          <input type='text' placeholder='FULL NAME' className='checkoutname'/>
          <input type='text' placeholder='EMAIL ADDRESS' className='checkoutemail'/>
        </div>
        <input type='text' placeholder='BILLING ADDRESS'className='checkoutbillingaddress'/>
        <div className='checkoutcityandpostalcode'>
          <input type='text' placeholder='CITY' className='checkoutcity'/>
          <input type='text' placeholder='POSTAL CODE' className='checkoutpostalcode'/>
        </div>
        <div className='billinginfo'>PAYMENT METHOD</div>
        <div className='paymentmethodpicker'>
          {creditIsActive && <div className='creditcardactive' onClick={()=> setCreditIsActive(false)}>CREDIT CARD</div>}
          {!creditIsActive && <div className='creditcard' onClick={()=> {setCreditIsActive(true); setCryptoIsActive(false); setPaypalIsActive(false)}}>CREDIT CARD</div>}
          {paypalIsActive && <div className='paypalactive' onClick={()=> setPaypalIsActive(false)}>PAYPAL</div>}
          {!paypalIsActive && <div className='paypal' onClick={()=> {setPaypalIsActive(true); setCreditIsActive(false); setCryptoIsActive(false)}}>PAYPAL</div>}
          {cryptoIsActive && <div className='cryptoactive' onClick={()=> setCryptoIsActive(false)}>CRYPTO</div>}
          {!cryptoIsActive && <div className='crypto' onClick={()=> {setCryptoIsActive(true); setCreditIsActive(false); setPaypalIsActive(false)}}>CRYPTO</div>}
        </div>
        <div className='paymentmethodform'>
          <input type='text' placeholder='CREDIT CARD NUMBER' className='cardnumber'/>
          <div className='expdateandcvvdiv'>
            <input className='expdate'  placeholder='EXPIRATION DATE'/>
            <input className='cvv' placeholder='CVV'/>
          </div>
        </div> 
      </div>
  )
}

export default function CheckoutPage() {

  return (
    <div className='checkoutpagemainbody'>
      <CheckoutInfo/>
      <CartSaleSummary checkoutcompletetext='COMPLETE TRANSACTION'/>
    </div>
  )
}
