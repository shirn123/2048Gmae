import { useQuery } from 'react-query';
import './App.css'
import fetchTable from './services/UserData.service';
import Game from './compponents/Game';

function App() {
  
  const userdataState = useQuery('userData',fetchTable);
  
  if( userdataState.isLoading){
    return (
        <h1>loaading..</h1>
    );
}
  if( userdataState.isError){
    return(
        <h1>so much BASA you got an ERROR</h1>
    )
    }

  return (
    <div>
      <Game userdata = {userdataState.data}></Game>
    </div>
  )
}

export default App
