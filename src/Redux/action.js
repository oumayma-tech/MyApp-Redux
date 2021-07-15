import { addtask, done } from "./actiontype"
import {removetask} from "./actiontype"
import {edittask} from "./actiontype"

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
export const Edittask=(todo)=>{
  return{
    type:edittask,
    payload:todo

  }
}
export const Done=(id)=>{
  return{
    type:done,
    payload:id,
    done: false
  }
}
