import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [PassWord,SetPassWord]=useState("");
  const [Length,SetLength]=useState(8);
  const [Number,SetNumber]=useState(false)
  const [Chararcter,SetChararcter]=useState(false)
  let LenghtFun=(e)=>{
   SetLength((pre)=>e.target.value);
  }
  function generate(){
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(Chararcter)
      alphabets+="!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
    if(Number)
      alphabets+="0123456789";
    let val='';
    for(let i=1;i<=Length;i++)
    {
      let idx=Math.floor(Math.random()*alphabets.length);
      val+=alphabets.charAt(idx);
      
    }
    SetPassWord((pre)=>val)

  }
  useEffect(()=>{
    generate()
    console.log("Hello");
    
    
    
  },[Length,Chararcter,Number])


  return (
    <>
      <p className='bg-[black] text-[white]  mx-auto my-10]'>PassWord Generator</p>
      <div  className=' select-none flex flex-col justify-centern items-center gap-3'>
        <input type="text"
        value={PassWord}  className='border mt-7 min-w-3' readOnly={true}/>
        <div className='flex gap-2'>
            <input type="range" 
        value={Length}
       onChange={LenghtFun}/>
       <p>{Length}</p>
        </div>
        <label htmlFor="NumberAllowed">
          <input type="checkbox"
          id='NumberAllowed'
          checked={Number}
          className='w-5 '
          onChange={(e)=>{
            SetNumber((pre)=>e.target.checked)
          }} />
          Number
        </label>
          <label htmlFor="Ch">
          <input type="checkbox"
          checked={Chararcter}
          id='CH'
          className='w-5 '
          onChange={(e)=>{
            SetChararcter((pre)=>e.target.checked)
          }} />
          Character
        </label>
      </div>
      <button className='bg-green-700 w-fit mx-auto my-3 p-1 text-[white]'>Copy</button>
      <button className='bg-red-600 w-fit mx-auto my-3 p-1 text-[white]' onClick={()=>{
        SetChararcter(pre=>false);
        SetNumber(pre=>false);
        SetLength(8)
      }}>Reset</button>
      <button className='bg-green-700 w-fit mx-auto my-3 p-1 text-[white]'>Save</button>

      
    </>
  )
}

export default App
