// import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './Learning/ConditionalRendering';
// import Handleform from './Learning/Handleform';
// import HideShowtoggle from './Learning/HideShowtoggle';
// import DarkMode from './DarkMode';
// import State_in_functionalComp from './Learning/State_in_functionalComp';
// import StateInClassComp from './Learning/stateInClassComp';
// import PropsWithFuncComp from './Learning/propsWithFuncComp';
// import PropsWithClassComp from './Learning/PropsWithClassComp';
// import React from 'react'
// import Getdata from './Learning/getData';
// import { useState } from 'react'


function App() {

  return (
    <div className="App">
      {/* <Handleform/> */}
      {/* <HideShowtoggle/> */}
      {/* <Getdata/> */}
      <ConditionalRendering/>
    </div>
  );
}
// function App() {
//   // const [name,setName] = useState("Harsh")

//   return (
//     <div className="App">
//       {/* <DarkMode/> */}
//       {/* <State_in_functionalComp/> */}
//       {/* <stateInClassComp/> */}
//       {/* <PropsWithFuncComp name={name}/>
//       <button onClick={()=>{setName("Dixit")}}>Update</button> */}
//       <PropsWithClassComp/>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Anil"
//     }
//   }
//   render()
//   {
//     return (
//       <div className="App">
//        <h1>Props !</h1>
//        <PropsWithClassComp name={this.state.name} email="anil@test.com"></PropsWithClassComp>
//        <button onClick={()=>this.setState({name:"Sidhu"})} >Update Name</button>
//       </div>
//     );
//   }
// }

export default App;
