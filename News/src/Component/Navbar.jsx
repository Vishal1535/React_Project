import React from 'react'
import { Wrapper } from './Wrapper'
import { UseContext } from './Context';
export const Navbar = () => {
 let {News,SetNews,Fetch,Loader,SetLoader}=UseContext();
  let timer;
  let FetchData=(value)=>{
   clearInterval(timer);
   timer=setTimeout(async()=>{
    SetLoader(true);
    let val=await Fetch(value);
        SetNews(val.data.articles);
        SetLoader(false)
    
   },800)
    
  }
  
  
  return (
      <>
    <Wrapper>
     <div className="bg-black w-full px-[200px] text-white sticky top-0 z-10">
      <div className="navbar max-w-[70rem] mx-auto sticky top-0 z-10">
  

    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>

    <div className="flex-none gap-2 flex items-center">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto text-black"
          onChange={(e)=>{
            FetchData(e.target.value)
          }}
        />
      </div>

      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>

    </div>
  </div>
</div>
   
    </Wrapper>

   </>
  )
}
