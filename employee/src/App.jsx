import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Footer } from './Component/Footer/Footer'
import { List } from './Component/List/List'
import { Navbar } from './Component/Navbar'
import { EmployeePopUp } from './Component/EmployeePop/EmployeePopUp'
import { DeletePop } from './Component/DeletePop/DeletePop'
import { useEffect } from 'react'
import { FetchData } from './Component/PopUp/Confige/employee'
import { Loader } from './Component/Loader/Loader'


function App() {
  let dispatch=useDispatch();
  let loader=useSelector(state=>state.employee.loading);
  
  
 useEffect(()=>{
  dispatch(FetchData())
  
 },[])
 
  
  return (
   
  <div className='flex flex-col min-h-screen '>
    {loader&&(<Loader/>)}
    <EmployeePopUp/>
    <DeletePop/>
  <Navbar/>
  <div className='flex-1'>
    <List/>
  </div>
 <Footer/>
  </div>
  )
}

export default App
