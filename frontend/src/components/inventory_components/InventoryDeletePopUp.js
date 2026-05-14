import React from 'react'

export default function InventoryDeletePopUp({setShowDelete}) {
  return (
    <div className='popupbackdrop'>
        <div className='popup'>
            <div className='popupheader'>ARE YOU SURE YOU WANT TO DELETE?</div>
            <div className='yesnodiv'>
                <div className='yesnobutton' onClick={()=>{setShowDelete(false)}}>YES</div>
                <div className='yesnobutton' onClick={()=>{setShowDelete(false)}}>NO</div>
            </div>
        </div>
    </div>
  )
}
