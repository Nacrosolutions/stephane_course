import { Component } from "react";


type User ={
name:string,
age:number
}

type UserSearchProps = {
    users:User[]
}

interface UserSearchState {
    name:string;
    user:User| undefined;
}

class UserSearch extends Component<UserSearchProps> {

state:UserSearchState= {
    name:'',
    user:undefined
}  ;  

 handleFindMethod =()=> {
    const foundUser=this.props.users.find(user=>user.name===this.state.name);

this.setState({user:foundUser});
}
render() {
    return (
        <div>
            <h2>Search for the user</h2>
            <input type="text"  value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            <p>{this.state.user?.name}</p>
            <button onClick={this.handleFindMethod}>Find Me</button>
        </div>
    )
}

}



export default UserSearch