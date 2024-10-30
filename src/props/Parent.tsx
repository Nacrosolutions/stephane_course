
import {Child} from './Child';

const Parent=()=>{
    return <Child color='red' handleClick={()=>console.log("hello")}>
   Some Kinda Children 
    </Child>
}

export default Parent;