import React from 'react'
import './DeletePopUp.css'

export default function DeletePopUp({setIsPopUp, deleteFromCart, selectedId}) {
  return (
    <div className='popupbackdrop'>
        <div className='popup'>
            <div className='popupheader'>ARE YOU SURE YOU WANT TO DELETE?</div>
            <div className='yesnodiv'>
                <div className='yesnobutton' onClick={()=>{deleteFromCart(selectedId)}}>YES</div>
                <div className='yesnobutton' onClick={()=>{setIsPopUp(false)}}>NO</div>
            </div>
        </div>
    </div>
  )
}
