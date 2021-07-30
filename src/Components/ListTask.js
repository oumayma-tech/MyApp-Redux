import React,{useState} from 'react'
import Task from './Task'
import "./tasklist.css"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function ListTask() {
    const [filter,setFilter] =useState(false)
    const [done,setDone]=useState(false)
    const Tasks=useSelector((state)=>state.Tasks)
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={()=>{setFilter(true);setDone(true)}} >Show Done</Button>
                <Button variant="outline-danger" onClick={()=>{setFilter(true);setDone(false)}} > Show Not Done</Button>
                <Button variant="info"onClick={()=>setFilter(false)} >Remove All Filters</Button>
            </div>
            {
                !filter ? Tasks.map((task, index) => (<Task task={task} key={index} index={index} />)):
                done ? Tasks.filter(todo=>todo.isDone===true).map((task, index) => (<Task task={task} key={index} index={index} />)):
                Tasks.filter(todo=>todo.isDone===false).map((task, index) => (<Task task={task} key={index} index={index} />))
            }
        </div >
    )
}

export default ListTask