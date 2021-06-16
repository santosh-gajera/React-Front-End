import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  unsetSelected 
} from './StarshipSlice.js';
function DetailsData() {
    
  const selectedData = useSelector((state)=>state.starshipReducer.selectedData);
 
  const details = useSelector((state)=>state.starshipReducer.details);
  const dispatch = useDispatch();
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">manufacturer</th>
                        <th scope="col">passengers</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedData && selectedData.map((item) => {
                            return <tr key={item.id} onClick={()=>{dispatch(unsetSelected())}}><td>{item.name}</td><td>{item.model}</td><td>{item.manufacturer}</td><td>{item.passengers}</td></tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default DetailsData
