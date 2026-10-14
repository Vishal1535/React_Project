import React from 'react'
import { IoClose } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { CloseDeletePopUp } from '../PopUp/popupslice';
import { DeleteApi } from '../PopUp/Confige/employee';

export const DeletePop = () => {

  const dispatch = useDispatch();
  let data=useSelector((state)=>state.Popup.DeletePopUp)
  let id=useSelector((state)=>state.Popup.selectedId)
  // console.log(id);
  
  let HandleConfigure=()=>{
    dispatch(DeleteApi(id))
    dispatch(CloseDeletePopUp())
  }

 
  
if(!data)return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3">

        <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-base-100 shadow-2xl">

          {/* Top Border */}
          <div className="h-1 w-full bg-gradient-to-r from-red-500 to-pink-500"></div>

          {/* Close Button */}
          <button
            className="absolute right-4 top-4 btn btn-sm btn-circle btn-ghost hover:bg-red-100 hover:text-red-500"
            onClick={() => dispatch(CloseDeletePopUp())}
          >

            <IoClose size={20} />

          </button>

          <div className="p-7 text-center">

            {/* Delete Icon */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

              <RiDeleteBinLine
                size={38}
                className="text-red-500"
              />

            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold">
              Delete Employee
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 opacity-70">

              Are you sure you want to delete this employee?
              This action cannot be undone.

            </p>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">

              <button
                className="btn btn-outline flex-1 rounded-xl"
                onClick={()=>{
                    return(
                        dispatch(CloseDeletePopUp())
                    )
                }}
              >
                Cancel
              </button>

              <button className="btn btn-error flex-1 rounded-xl text-black" onClick={HandleConfigure}>

                Delete

              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}