import { useState } from 'react';
import './App.css'
import { Button } from './Button';
import { Container } from './Container';


function App() {
  const [c ,Setc]=useState("white")
  let Color = ["Red", "Blue", "Green", "aqua", "Black"];
  return(
    <>
      <h1>🎨Color Switcher</h1>
      <div className='flex gap-1.5 justify-center'>
          {Color.map((item)=>{
       return(
         <Button  key={item} func={Setc}>{item}</Button>
       )
      })}
      </div>
      <Container co={c} />
    
    </>
  )
  
  
}

export default App
