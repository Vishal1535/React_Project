import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {
 let [Id,SetId]=useState('')
  const [data,SetData]=useState([]);
  const [Name,SetName]=useState('');
  const [Number,SetNumber]=useState('');
  const [turn,SetTurn]=useState(true)
  let FetchData=async ()=>{
    let Data=await axios('https://69f38d15bd2396bf53102fae.mockapi.io/Todo');
    SetData(Data.data);
    
    
    
    
    
  }
  useEffect(()=>{
    FetchData();
  },[])
  let AddData=async ()=>{
    let obj={
      name:Name,
      RollNo:Number
    }
    await axios("https://69f38d15bd2396bf53102fae.mockapi.io/Todo",{
      method:'post',
      data:obj
    })
    SetName('');
    SetNumber('')
    FetchData();
  }
  function EditData(name,RollNo,id)
  {
    SetTurn(false);
    SetName(name),
    SetNumber(RollNo);
    SetId(id);
    
  
    
  }
  async function DeleteData(id)
  {
    await axios(`https://69f38d15bd2396bf53102fae.mockapi.io/Todo/${id}`,{
      method:"delete"
    })
    FetchData();
    
  }
 async function EditBtn(id) {
  console.log(id);
  
  let obj = {
    name: Name,
    RollNo: Number
  };

  await axios.put(
    `https://69f38d15bd2396bf53102fae.mockapi.io/Todo/${id}`,
    obj
  );

  // ✅ State reset
  SetName('');
  SetNumber('');

  // ✅ Fresh data fetch
  FetchData();

  SetTurn(true);
}
  
  
  
  return(
  <>
    <div className='flex flex-col w-screen h-screen pt-14 items-center '>
      <div className='flex gap-1.5 justify-center items-center'>
        <div className='flex flex-col gap-1.5'>
       <input type="text" placeholder='Enter the name' value={Name} onChange={(e)=>{
         return(
          SetName(e.target.value)
        )
       }} />
    <input type="number" className='border-2' value={Number} onChange={(e)=>{
      return(
        SetNumber(e.target.value)
      )
    }} />
    </div>
   {turn?( <button className='bg-[green] p-2 rounded-3xl text-[white] cursor-pointer ' onClick={AddData}>ADD</button>):( <button className='bg-[green] p-2 rounded-3xl text-[white] cursor-pointer ' onClick={()=>{
    EditBtn(Id)
   }}>Edit</button>)}
      </div>
     {data.map((obj,idx)=>{
      return(
         <div className='flex gap-3 bg-amber-400 my-1 w-[20%] justify-between' key={idx}>
        <div className='flex flex-col text-[20px]'>
          <p className='mt-1'>{obj.name}</p>
          <p className='my-1'>{obj.RollNo}</p>
         
        </div>
        <div className='flex flex-col pr-1.5'>
          <button className='bg-green-500 mt-1' onClick={()=>{
            EditData(obj.name,obj.RollNo,obj.id)
          }}>Edit</button>
          <button className='bg-red-500 my-1' onClick={()=>{
            DeleteData(obj.id)
          }}>Delete</button>
        </div>
      </div>
      )
     })}
    </div>
  </>
 ) 
 
 
}

export default App
