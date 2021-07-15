import {useDispatch } from 'react-redux'
import React ,{useState} from 'react'
import {Addtask,Done} from '../Redux/action'
import "./addtask.css"


function AddTask(props) {
    const[input,setInput]= useState("")
    const[done,setDone]=useState("")
   const dispatch = useDispatch()
   const handleClick =()=>{dispatch(Addtask(input), setInput(""))}
   const handlecomplet=()=>{dispatch(Done(done),setDone(""))}
    return(
        <div className="TodoInput">
            
            <input  value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <button onClick={handleClick} >Add task</button>
            <button onClick={handlecomplet}>complet</button>
            {/* <button onClick={handleincomplet}>Incomplet</button> */}

        </div>
    )
}
export default AddTask