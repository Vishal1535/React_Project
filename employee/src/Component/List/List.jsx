import React from 'react'
import { Layout } from '../Layout'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { OpenDeletePopUp, OpenEmployee } from '../PopUp/popupslice';
export const List = () => {
  let employeeDetails=useSelector(state=>state.employee.employee);
  
 
  
  
  // console.log(employeeDetails);
  
  
  let dispatch=useDispatch()
  
  
  return (
  <>
<Layout>
    <div className='mt-5'>
    {employeeDetails.map((item)=>{
      return(
        <AddList item={item} key={item.id}/>
      )
    })}

    </div>
</Layout>
  </>  
  )
  function AddList({item}){
    return(
        <ul className="list bg-base-100 rounded-box shadow-md rounded-lg">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{item.Name}</li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src={item.ProfileUrl}/></div>
    <div>
      <div>{item.Email}</div>
      
    </div>
    <p className="list-col-wrap text-xs">
      {item.Bio}
    </p>
    <button className="btn btn-square btn-ghost text-[21px]" onClick={()=>{
      dispatch(OpenEmployee(item))
      
    }}>
     <MdModeEdit/>
    </button>
    <button
  className="btn btn-square btn-ghost text-[21px]" onClick={()=>{
    dispatch(OpenDeletePopUp(item.id))
    
  }}>
  <MdDelete />
</button>
    <button className="btn btn-square btn-ghost text-[19px]">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
 
  
  
  
</ul>
    )
  }
}
