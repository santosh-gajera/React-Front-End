import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getData
} from './StarshipSlice.js';
import {
  setSelected, unsetSelected 
} from './StarshipSlice.js';

export function ShipData() {
  const ApiData = useSelector((state)=>state.starshipReducer.startship_data);
  const dispatch = useDispatch();
  const [data,setData] = useState([]);

  useEffect(() => {
  
   setData(ApiData);
  }, [ApiData])

  useEffect(() => {
    dispatch(getData());
    }, [])

  return (
      <>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item)=>{
        return <tr key={item.id}  onClick={()=>{dispatch(setSelected(item))}}><td>{item.name}</td><td>{item.model}</td></tr>
      })
    }
    </tbody>
    </table>
      </>
  );
}
