import React, { useEffect, useState } from 'react'
import './Inventory.css'
import InventoryDeletePopUp from '../../components/inventory_components/InventoryDeletePopUp'
import AddNewVehicle from '../../components/inventory_components/AddNewVehicle'
import UpdateVehicle from '../../components/inventory_components/UpdateVehicle'

function InventoryCarCard({primary_name, secondary_name, price, image, callDeleteFunction, updateID, updateindex, inventorycars, setInventoryCars}){
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdatePopup, setShowUpdatePopup] = useState(false)


    
    return(
        <div className='inventorycarcard'>
                {showUpdatePopup && <UpdateVehicle setShowUpdatePopup={setShowUpdatePopup} updateID={updateID} updateindex={updateindex} inventorycars={inventorycars} setInventoryCars={setInventoryCars}/>}
                {showDelete && <InventoryDeletePopUp setShowDelete={setShowDelete} callDeleteFunction={callDeleteFunction}/>}
                <div className='inventoryvehicle'>
                    <div className='inventoryvehicleimage' style={{
                        backgroundColor: image
                    }}></div>
                    <div className='inventoryvehicleinfo'>
                        <div className='inventoryvehicleprimaryname'>{primary_name}</div>
                        <div className='inventoryvehiclesecondaryname'>{secondary_name}</div>
                    </div>
                </div>
                <div className='inventorystatus'>AVAILABLE</div>
                <div className='inventoryprice'>${price}</div>
                <div className='inventorycategory'>Supercar</div>
                <div className='inventoryactions'>
                    <div className='inventoryupdate' onClick={()=> {setShowUpdatePopup(true)}}>UPDATE</div>
                    <div className='inventorydelete' onClick={()=>{setShowDelete(true)}} ></div>
                </div>
            </div>
    )
}

function InventoryPropertyCard(){
    return(
        <div className='inventoryproperty'>
                <div className='inventorypropertyfigure'>32</div>
                <div className='inventorypropertyname'>Total Vehicles</div>
        </div>
    )
}

export default function Inventory() {
    const [showAddNewPopup, setShowAddNewPopup] = useState(false)
    const [inventorycars, setInventoryCars] = useState([])
    console.log(inventorycars)
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/cars/car')
        .then(res => res.json())
        .then(data => setInventoryCars(data))
        .catch(err => console.log(err))
    }, [])

    function deleteCar(id){
        fetch(`http://127.0.0.1:8000/cars/car/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => {
            setInventoryCars(prev =>
                prev.filter(cars => cars.id !== id)
            )
        })
        .catch(err => console.log(err))
    }



     
  return (
    <div className='maininventorybody'>
        {showAddNewPopup && <AddNewVehicle setShowAddNewPopup={setShowAddNewPopup} setInventoryCars ={setInventoryCars}/>}
        
        <div className='inventoryheaderdiv'>
            <div className='inventorypagetitle'>
                <div className='viewinventorytext'>View Inventory</div>
                <div className='viewinventorydescription'>Manage your fleet and track status</div>
            </div>
            <div className='addnewvehiclebutton' onClick={()=>{setShowAddNewPopup(true)}}>+ Add New Vehicle</div>
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

            {inventorycars.map((inventorycar,index) => {
                return <InventoryCarCard 
                    key={inventorycar.id}
                    inventorycars={inventorycars}
                    setInventoryCars = {setInventoryCars}
                    updateindex={index}
                    updateID={inventorycar.id}
                    image= {inventorycar.image}
                    primary_name={inventorycar.primary_name}
                    secondary_name= {inventorycar.secondary_name}
                    price={inventorycar.price}
                    callDeleteFunction={() => deleteCar(inventorycar.id)}
                />
            })}
        </div>
        <div className='inventoryresultsdiv'>
            <div className='showingresults'>Showing 1 to 4 of 32 results</div>
            <div className='changeinventorydiv'>
                <div className='previousinventorybutton'>Previous</div>
                <div className='resultsbutton'>1</div>
                <div className='resultsbutton'>2</div>
                <div className='resultsbutton'>3</div>
                <div className='nextinventorybutton'>Next</div>
            </div>
        </div>

        <div className='inventorypropertiesdiv'>
            
            <InventoryPropertyCard/>
            <InventoryPropertyCard/>
            <InventoryPropertyCard/>
            <InventoryPropertyCard/>
        </div>
    </div>
  )
}
