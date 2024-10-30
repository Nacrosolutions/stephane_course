import { useState } from "react";


type User ={
    name:string;
    age:number;
}

const users= [
    {name:"nabham",age:26},
    {name:"prokshima",age:26},

]

const UserSearch =()=>{

    const [name,setName]=useState('');

const [user,setUser]=useState<User | undefined>();



function handleFindMethod () {

//  search.filter(el=>{
//     if(el.name==name) {
//         setSearch(el);
// return el;
//     }
//  })


const foundUser=users.find(user=>user.name===name);

setUser(foundUser);
}

    return (
        <div>
            <h2>Search for the user</h2>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>{user?.name}</p>
            <button onClick={handleFindMethod}>Find Me</button>
        </div>
    )




}


export default UserSearch;