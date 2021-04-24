import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import liftData from './data';
import Lift from './components/Lift';
import { lift } from './actions/buttonActions';
import './App.scss';

const App = () => {
  
  return (
    <div className="flex">
      <h1>Elevator Execrise</h1>
      <div className="main-space" style={{display:"flex" ,justifyContent:"center"}}>
        <div className="floors">
          <div className="floor-name">9th</div>
          <div className="floor-name">8th</div>
          <div className="floor-name">7th</div>
          <div className="floor-name">6th</div>
          <div className="floor-name">5th</div>
          <div className="floor-name">4th</div>
          <div className="floor-name">3rd</div>
          <div className="floor-name">2nd</div>
          <div className="floor-name">1st</div>
          <div style={{marginTop:"45px", marginRight:"10px",color:"black"}}>Ground Floor</div>
        </div>
        <div className="elevator-1" >
          {
            liftData.map((container, idx) => (
              <Container key={idx} row={idx} col='1'/>
            )).reverse()
          }
          <Lift id={0} className="person-1" elevatorNum=".person-1"/>
        </div>
        <div className="elevator-2">
          {
            liftData.map((container, idx) => (
              <Container key={idx} row={idx} col='2'/>
            )).reverse()
          }
          <Lift id={1} className="person-2" elevatorNum=".person-2" />
        </div>
        <div className="elevator-3" >
          {
            liftData.map((container, idx) => (
              <Container key={idx} row={idx} col='3'/>
            )).reverse()
          }
          <Lift id={2} className="person-3" elevatorNum=".person-3"/>
        </div>
        <div className="elevator-4" >
          {
            liftData.map((container, idx) => (
              <Container key={idx} row={idx} col='4'/>
            )).reverse()
          }
          <Lift id={3} className="person-4" elevatorNum=".person-4"/>
        </div>
        <div className="elevator-5" >
          {
            liftData.map((container, idx) => (
              <Container key={idx} row={idx} col='5'/>
            )).reverse()
          }
          <Lift id={4} className="person-5" elevatorNum=".person-5"/>
        </div>
        <div className="btn-holder">
          {
            liftData.map((ele, idx) => (
              <Button key={idx} name={ele.name} value="Call" lift={lift}/>
            )).reverse()
          }
        </div>
      </div>
    </div>
  )
}

export default App;
