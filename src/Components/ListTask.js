import { useSelector ,useDispatch} from "react-redux"
import { Addtask, Edittask, Removetask } from "../Redux/action"
import React ,{useState} from 'react'
import "./tasklist.css"
import {CSSTransition,TransitionGroup} from "react-transition-group"




const ListTask=()=>{
    const[input,setInput]= useState("")
    const [text, setText] = useState("")
    const Tasks=useSelector((state)=>state.Tasks)
   const dispatch = useDispatch()
    return(
        <div className="TodoList">
            
           
            <ul>
   {Tasks.map((el)=>
   <li className="Todo-task" key={el.id}>
       <p>{el.text}</p>
       <button onClick={()=>dispatch(Removetask(el.id))}> remove</button>
       <button onClick={()=>dispatch(Edittask(el.i))}> edit</button>
       </li>
    )}
     
            </ul>
        </div>
    )
}
export default ListTask