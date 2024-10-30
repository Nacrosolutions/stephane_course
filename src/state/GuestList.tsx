import { useState } from "react";

 
const GuestList=()=>{


    const[name,setName]=useState('');
    const [guest,setGuests]=useState<string[]>([]);

 function handleAddGuest () {
    setName('');
    setGuests([...guest,name])
 }

    return (
        <div>
          <h3>Guest List</h3>  
          <ul>

 {guest.map(el=><li key={el}>{el}</li>)}
          </ul>
          
          <input type="text" placeholder="Enter Text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button onClick={handleAddGuest}> Add</button>
        </div>
    )

}

export default GuestList;