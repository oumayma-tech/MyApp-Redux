import { addtask, done, show_completed,show_incompleted } from "./actiontype"
import {removetask} from "./actiontype"
import {edittask} from "./actiontype"
import {toggle_task} from './actiontype'

let nextTodoId = 0;

export const Addtask=(newtext)=>{
  return{ type:addtask,
    payload:newtext,
   
   

  };
};
export const Removetask=(id)=>{
  return{
    type:removetask,
    payload:id
    
}
}
export const Edittask=(id,task)=>{
  return{
    type:edittask,
    payload:{id,task}

  }
}
export const toggle_Task=(id)=>{
  return{
    type:toggle_task,
  payload:id
  
  }
}
