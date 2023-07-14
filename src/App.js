import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { fetchUsers } from './redux/slice/users';
import Data from './components/Data';

function App() {
  const dispatch=useDispatch();

  const state=useSelector((state)=> state);
  console.log("State",state);

  if(state.users.isLoading){
    return <h1>Loading......</h1>
  }

  return (
    <div className="App container pt-5">
      <button className='btn btn-success' onClick={(e)=> dispatch(fetchUsers())}>Fetch Users</button>
      <Data data={state.users.data}/>
    </div>
  );
}

export default App;
