import {useDispatch } from 'react-redux'
import React ,{useState} from 'react'
import {Addtask} from '../Redux/action'
import "./addtask.css"
import {Button} from 'react-bootstrap'


function AddTask(props) {
    const[input,setInput]= useState("")
   
   const dispatch = useDispatch()
   const handleClick =()=>{dispatch(Addtask(input), setInput(""))}
   
    return(
        <>
        <div className="TodoInput">
            
            <input  value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <button onClick={handleClick} >Add task</button>
            {/* <button onClick={handlecomplet}>complet</button> */}
            {/* <button onClick={handleincomplet}>Incomplet</button> */}
            </div>
        
        </>
    )
}
export default AddTask