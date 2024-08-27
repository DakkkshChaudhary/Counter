import {React,useState} from 'react';

const Counter=()=>{
    const [count,setCount]=useState(1);
    return(
        <>
        <div>{count}</div>
        <button onClick={()=>{setCount(count+1)}}>Plus</button>
        <button onClick={()=>{setCount(count-1)}}>Minus</button>
        </>
    )
}
export default Counter