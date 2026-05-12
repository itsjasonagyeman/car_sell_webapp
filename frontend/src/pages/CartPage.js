import React, { useEffect, useState } from 'react'
import './CartPage.css'
import CartSaleSummary from '../components/cart_page_components/CartSaleSummary'
import DeletePopUp from '../components/cart_page_components/DeletePopUp'

function CartCarCard({setIsPopUp, primaryname, speed, enginetype, geartype, price, setSelectedId, id}){
  return (
          <div className='cartcard'>
            <div className='cartcardimage'></div>
            <div className='cartcardinfo'>
              <div className='cartcarnameanddelete'>
                <div className='cartcarname'>{primaryname}</div>
                <div className='cartcardelete' onClick={()=> {
                  setSelectedId(id)
                  setIsPopUp(true)}}></div>
              </div>
              
              <div className='cartcarproperties'>{speed} MPH &bull; {enginetype} &bull; {geartype}</div>
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
              <div className='cartcarprice'>${price}</div>
            </div>
          </div>
  )
}

export default function CartPage() {
  const [isPopUp, setIsPopUp] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/cars/cart')
    .then(res => res.json())
    .then(data => setCart(data))
    .catch(err => console.log(err))
  }, [])

  function deleteFromCart(id){
    fetch(`http://127.0.0.1:8000/cars/cart/${id}`,{
      method: 'DELETE'
    })
    .then(()=>{
      setCart(prev => prev.filter(item => item.id !== id ))
      setIsPopUp(false)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='cartMainBody'>
      {isPopUp && <DeletePopUp setIsPopUp={setIsPopUp} deleteFromCart={deleteFromCart} selectedId={selectedId}/> }
      <div className='cartyourselection'>Your Selection</div>
      <div className='cartview'>
        <div className='cartcars'>
          {cart.map((item, index) => {
            return <CartCarCard 
            key={item.id}
            id = {item.id}
            setIsPopUp={setIsPopUp}
            setSelectedId={setSelectedId}
            primaryname={item.primary_name}
            speed={item.speed}
            enginetype={item.engine_type}
            geartype={item.gear_type}
            price={item.price}
            />
          })}
        </div>
        <CartSaleSummary checkoutcompletetext='PROCEED TO CHECKOUT'/>
      </div>
    </div>
  )
}
