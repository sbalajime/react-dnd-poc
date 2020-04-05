import React from 'react';
import logo from './logo.svg';
import './App.css';
import Machine from './components/Machine';
import grid from './components/Grid';
import  LeftPane from './views/LeftPane';
import  RightPane from './views/RightPane';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
  return (

    <div className="App">
      <DndProvider backend={Backend}>
        <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
          <LeftPane />
          <RightPane num={10}/>
        </div>
      </DndProvider>     
    </div>
  );
}

export default App;
