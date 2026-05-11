import React, {useState} from 'react'
import './CheckoutPage.css'

export default function CheckoutPage() {
  let [creditIsActive, setCreditIsActive] = useState(false)
  let [paypalIsActive, setPaypalIsActive] = useState(false)
  let [cryptoIsActive, setCryptoIsActive] = useState(false)
  return (
    <div className='checkoutpagemainbody'>
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
        <div className='paymentmethodform'></div>
      </div>
      <div className='checkoutconfirmationcard'></div>
    </div>
  )
}
