import React from 'react';
import "./task.css"
import "./TodoList.css"


const Task = ({task, isdone}) => {
  return 
  <div className="Todo" onClick={e => isdone(task.id)}>
    {task.title}
  </div>
}
export default Task