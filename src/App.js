import React,{useState} from 'react';
import { ShipData } from './features/ShipData';
import  DetailsData  from './features/DetailsData';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

function App() {
  const details = useSelector((state)=>state.starshipReducer.details);
  const dispatch = useDispatch();
  const [data,setData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        {details==="Y" ? <DetailsData />: <ShipData /> } 
      </header>
    </div>
  );
}

export default App;
