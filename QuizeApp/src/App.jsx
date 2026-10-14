import { useState } from 'react'
import './App.css'
import { Timer } from './Component/Timer';
import { Question } from './Component/Question';
import { Result } from './Component/Result';



function App() {
  let [Score,SetScore]=useState(0);
   let [time,Settime]=useState(10);
   let [Reset,SetReset]=useState(false)
  return<>
  {/* <Timer Settime={Settime} time={time} SetReset={SetReset} /> */}
 {
 Reset ? (
   <Result Score={Score}/>
 ) : (
   <>
     <Timer Settime={Settime} time={time} SetReset={SetReset} />
     <Question SetScore={SetScore} Settime={Settime} SetReset={SetReset}/>
   </>
 )
}
  {/* <Question  SetScore={SetScore} Settime={Settime} SetReset={SetReset}/> */}
  {/* <Result Score={Score}/> */}
  
  </>
}
export default App;