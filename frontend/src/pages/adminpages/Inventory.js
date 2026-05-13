import React from 'react'
import './Inventory.css'

export default function Inventory() {
  return (
    <div className='maininventorybody'>
        <div className='inventoryheaderdiv'>
            <div className='inventorypagetitle'>
                <div className='viewinventorytext'>View Inventory</div>
                <div className='viewinventorydescription'>Manage your fleet and track status</div>
            </div>
            <div className='addnewvehiclebutton'>+ Add New Vehicle</div>
        </div>

        <div className='inventorysearchdiv'>
            <input type='text' placeholder='Search by vehicle name, category, etc.' className='inventorysearchbar'/>
            <div className='inventoryfilterstatusbutton'>Filter Status</div>
            <div className='inventoryfilterpricebutton'>Price High to Low</div>
        </div>

        <div className='inventorytablediv'>
            <div className='inventorytableheaders'>
                <div className='vehicleheader'>VEHICLE</div>
                <div className='statusheader'>STATUS</div>
                <div className='priceheader'>PRICE/RATE</div>
                <div className='categoryheader'>CATEGORY</div>
                <div className='actionsheader'>ACTIONS</div>
            </div>

            <div className='inventorycarcard'>
                <div className='inventoryvehicle'>
                    <div className='inventoryvehicleimage'></div>
                    <div className='inventoryvehicleinfo'>
                        <div className='inventoryvehicleprimaryname'>Ferrari</div>
                        <div className='inventoryvehiclesecondaryname'>Ferraririr</div>
                    </div>
                </div>
                <div className='inventorystatus'>AVAILABLE</div>
                <div className='inventoryprice'>$3000</div>
                <div className='inventorycategory'>Supercar</div>
                <div className='inventoryactions'>
                    <div className='inventoryupdate'>UPDATE</div>
                    <div className='inventorydelete'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
