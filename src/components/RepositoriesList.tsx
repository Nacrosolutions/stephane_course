import { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useSelector } from "react-redux";
import { RootState } from "../redux-state/reducers/combined-index";
import { useTypedSelector } from "../hooks/useTypedSelector";


const RepositoriesList =()=>{

    const [term,setTerm]=useState('');

const {searchRepositories}=useAction();

const {data,error,loading}=useTypedSelector((state :RootState)=>state.repositories);

const onSubmit =(event:React.FormEvent<HTMLFormElement> ) =>{

    event.preventDefault();
searchRepositories(term);
}

    return (
        <div>
            <form onSubmit={onSubmit}>

                <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
                <button>Search </button>
            </form>

            <div>
                {error && <h3>{error}</h3> }
                {loading && <h3>Loading....</h3>}
                {!error && !loading && data}
            </div>
        </div>
    )

}


export default RepositoriesList;