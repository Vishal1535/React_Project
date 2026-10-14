import { useState } from 'react';
import './App.css'
import { PopBtn } from './Component/PopBtn';
import { Pop } from './Component/Pop';



function App() {
 const [c1,Setc1]=useState(false);
 const [c2,Setc2]=useState(false);
 
 
 return(
  <>
 <div className='flex w-[100]  justify-center items-center gap-4  h-screen overflow-hidden p-0 m-0'>
   {!c1&&<PopBtn title="del" func1={Setc1} />}
  {!c2&&<PopBtn title="edit" func1={Setc2} />}
 {c1&&<Pop func1={Setc1}  title="del" /  >}
 {c2&&<Pop func1={Setc2}  title='edit' />}
 </div>
  

  </>
 )
 
}

export default App
