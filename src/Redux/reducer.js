
import { addtask, removetask,edittask ,toggle_task} from "./actiontype"
const inisialState={
   Tasks:[{id:0,task:'hello',isDone:false}],
  
 
}
const Taskreducer=(state=inisialState,action)=>{
    switch (action.type) {
        case addtask:
            return{...state,Tasks:[...state.Tasks,{task:action.payload, id:Math.random(),isDdone:false}]}
            
        case removetask:
          
            return {...state, Tasks: state.Tasks.filter((T,i)=> T.id!==action.payload)}
        case edittask:
            
        return{...state,Tasks:state.Tasks.map((key)=>key.id==action.payload.id ? {...key,task:action.payload.task}:key
        )}
        case toggle_task: {
          
           return  {...state,Tasks:state.Tasks.map((task) =>
                  task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                ),
              };}
        
    default:
           return state
    }
}
export default Taskreducer