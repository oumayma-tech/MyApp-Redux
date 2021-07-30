import logo from './logo.svg';
import './App.css';
import Addtask from './Components/Addtask'
import {show_completed} from './Redux/action'
import {usedispatch,usestate} from 'react-redux'
import ListTask from './Components/ListTask';
import {Button} from 'react-bootstrap'

function App() {
  // const dispatch = useDispatch()
  // const[complet,setComplet]=useState("")
  // const handlecomplet=()=>{dispatch(show_completed(complet),setComplet(""))}
  return (
    <div>
      <Addtask/>
      <ListTask/>
      
     
    </div>
  );
}

export default App;
