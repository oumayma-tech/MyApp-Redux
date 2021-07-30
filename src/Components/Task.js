import React from 'react'
import { Button } from "react-bootstrap"
import Edit from './Edittask'
import "./task.css"
import { useDispatch } from "react-redux"
import {  toggle_Task } from '../Redux/action'

function Task({ task, index }) {

    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatching the toggle task action
        dispatch(toggle_Task({ id: task.id }))
    }
    console.log(task)
    return (
        <div className="task">

            <h4 style={{ textDecoration: task.isDone ? "line-through" : "none" }}><span className="Task_Number">Task {Number(index) + 1}:</span> {task.task}</h4>
            <div className="taskBtns">
                <Button variant={task.isDone ? "outline-danger" : "success"} onClick={handleClick}>{task.isDone ? "Undo" : "Done"}</Button>
                <Edit task={task} />
            </div>
        </div>
    )
}
export default Task