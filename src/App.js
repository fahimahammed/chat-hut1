import React from 'react';
 
 
import './App.css';
import Sidebar from './Sidebar';
import {selectUser} from "./features/userSlice"
import { useSelector } from 'react-redux';

function App() {
  const user= useSelector(selectUser);
  return (
    <div className="app">
      {user ?(
        <>
           {/*Sidebar*/}
      <Sidebar/>
      {/*Chat*/}
      </>
      ):
      (
        <h2>You need to login</h2>
      )}
      
   
    </div>
  );
}

export default App;
