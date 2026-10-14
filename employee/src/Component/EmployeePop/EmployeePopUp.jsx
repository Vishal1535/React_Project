import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { CloseEmployee } from '../PopUp/popupslice';
import { PostApi, UpdateAPi } from '../PopUp/Confige/employee';

export const EmployeePopUp = () => {
   let dispatch=useDispatch();
    let PopUp=useSelector(state=>state.Popup.employeePopUp);
  const [formDetails,setFormDetails]=useState({
    ProfileUrl:'',
    Name:'',
    Email:'',
    Bio:'',
    highlight:false
  })
  
  const handleInput=(e)=>{
    
    const {name,value}=e.target;
    setFormDetails((state)=>{
      return{
        ...state,
        [name]:value
      }
    })
    
    
  }
  const handleSubmit=async()=>{
    if(PopUp.id)
    {
      dispatch(UpdateAPi({
        id:PopUp.id,
        details:formDetails
      }))
    }
   else{ await dispatch(PostApi(formDetails))
  }
    dispatch(CloseEmployee())
    
  }
    let pop=useSelector((state)=>state.Popup.employeePopUp);
    
    
      
      useEffect(()=>{

        if(PopUp.id)
        {
          setFormDetails({
              ProfileUrl:PopUp.ProfileUrl,
    Name:PopUp.Name,
    Email:PopUp.Email,
    Bio:PopUp.Bio,
    highlight:false
          })
        }
        else if(!PopUp)
        {
          setFormDetails({
             Name:'',
    Email:'',
    Bio:'',
    highlight:false
          })
        }
      },[PopUp])
   
    if(!pop)
        return;
    
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-3'>

      <div className='bg-base-100 w-full max-w-md rounded-3xl shadow-2xl p-6 relative'>

        {/* Close Button */}
        <button className='btn btn-sm btn-circle absolute right-4 top-4'>
          <IoClose size={20} onClick={()=>{
            dispatch(CloseEmployee())
            
          }} />
        </button>

        {/* Heading */}
        <h1 className='text-3xl font-bold text-center mb-1'>
          Employee Details
        </h1>

        <p className='text-center text-sm opacity-70 mb-6'>
          Fill employee information below
        </p>

        {/* Form */}
        <div className='space-y-4'>

          <div>
            <label className='label'>
              <span className='label-text font-medium'>
                Profile URL
              </span>
            </label>

            <input
              type='text'
              placeholder='Enter profile image URL'
              className='input input-bordered w-full' name='ProfileUrl' value={formDetails.ProfileUrl} onChange={handleInput}/>
          </div>

          <div>
            <label className='label'>
              <span className='label-text font-medium'>
                Name
              </span>
            </label>

            <input
              type='text'
              placeholder='Enter employee name'
              className='input input-bordered w-full' name='Name'value={formDetails.Name} onChange={handleInput}
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text font-medium'>
                Email
              </span>
            </label>

            <input
              type='email'
              placeholder='Enter email'
              className='input input-bordered w-full' value={formDetails.Email} name='Email' onChange={handleInput}
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text font-medium'>
                Bio
              </span>
            </label>

            <textarea
              placeholder='Write something...'
              className='textarea textarea-bordered w-full h-24 resize-none' value={formDetails.Bio} name='Bio' onChange={handleInput}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className='flex gap-3 pt-2'>
            <button className='btn btn-outline w-1/2' onClick={()=>{
                dispatch(CloseEmployee())
            }}>
              Cancel
            </button>

            <button className='btn btn-neutral w-1/2' onClick={handleSubmit}>
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}