
import { addtask, removetask,edittask ,done} from "./actiontype"
const inisialState={
   Tasks:[{id:0,text:'hello',done:false}],
   text:""
 
}
const Taskreducer=(state=inisialState,action)=>{
    switch (action.type) {
        case addtask:
            return{...state,Tasks:[...state.Tasks,{text:action.payload, id:Math.random(),isdone:false}]}
            
        case removetask:
          
            return {...state, Tasks: state.Tasks.filter((T,i)=> T.id!==action.payload)}
        case edittask:
            
        return{...state,Tasks:state.Tasks.map((key,i)=>key.id==action.paload.id? {...key,text:action.payload.text}:key
        )}
        case done:
            return {...state,tasks:state.tasks.filter(x=>x.done ===action.payload.done)}
        
        default:
           return state
    }
}
export default Taskreducer