import React from 'react'
import './UserAccount.css'

export default function UserAccount() {
  return (
    <div className='mainaccountbody'>
        <div className='userinfoactions'>
            <div className='userinfo'>
                <div className='userimage'></div>
                <div className='usernameandemail'>
                    <div className='username'>Jason Agyeman</div>
                    <div className='useremail'>jasonnhyiraagyeman@gmail.com</div>
                </div>
            </div>
            <div className='usereditprofile'>
                Edit Profile
            </div>
        </div>

        <div className='activerentalsdiv'>
            <div className='activerentalstitle'>Active Rentals</div>
        </div>
    </div>
  )
}
