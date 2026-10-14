import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import products from './Component/product'
function App() {
  const [count, setCount] = useState(0)
  const [cart,SetCart]=useState([])
  const [Total,SetTotal]=useState(0)
  const AddtoCart=(item)=>{
    let exist=cart.find((c)=>c.id===item.id)
    if(exist)
    {
      let UpdateCart=cart.map((c)=>{
        if(c.id===item.id)
        {
          return{
            ...c,
            quantity:c.quantity+1
          }
        }
        else
        {
          return c
        }
        
      })
      SetCart(UpdateCart)
    }
    else{
      SetCart([
        ...cart,
        {
          ...item,
          quantity:1
        }
      ])
    }
    

  }
  const RemoveOnnItem=(item)=>{
    if(item.quantity===1)
    {
      let UpdateData=cart.filter((i)=>i.id!=item.id)
      SetCart(UpdateData)
    }
    else{
      let UpdateDate=cart.map((i)=>{
        if(i.id===item.id){
          return{
            ...item,
            quantity:i.quantity-1
          }
        
        }
          else
            {
            return i
          }
      })
      SetCart(UpdateDate)
    }
    
  }
  let RemoveOneItem=(item)=>{
    let updateData=cart.filter((i)=>i.id!=item.id)
    SetCart(updateData)
    
  }
  const TotalAmount=()=>{
    let total=0;
    cart.forEach((item)=>{
      total+=item.price*item.quantity
    })
    SetTotal(total)
  }
  useEffect(()=>{
    TotalAmount()
  },[cart])

  return (
  <>
  <div className='w-full text-center text-4xl my-1.5'>Add to Cart</div>
 <div className="flex flex-wrap gap-6 justify-center p-5 bg-gray-100">
  {products.map((item) => {
    return (
      <div
        key={item.id}
        className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">
            {item.name}
          </h2>

          <p className="text-lg text-green-600 font-semibold">
            ₹ {item.price}
          </p>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800" onClick={()=>AddtoCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  })}
</div>
{cart.length===0?(
<><p className='text-2xl text-center my-3'>Add Empty</p></>
):
<>
<div className="flex flex-col gap-5 p-5 bg-gray-100 min-h-screen">
  {cart.map((item) => {
    return (
      <div
        key={item.id}
        className="bg-white shadow-lg rounded-2xl p-5 flex items-center justify-between"
      >
        <div>
          <h2 className="text-xl font-bold">
            {item.name}
          </h2>

          <p className="text-green-600 font-semibold mt-1">
            ₹ {item.price}
          </p>

          <div className="flex items-center gap-3 mt-3">
            <button className="bg-black text-white px-3 py-1 rounded-lg" onClick={()=>RemoveOnnItem(item)}>
              -
            </button>

            <p className="font-bold">
              {item.quantity}
            </p>

            <button className="bg-black text-white px-3 py-1 rounded-lg" onClick={()=>AddtoCart(item)}>
              +
            </button>
          </div>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600" onClick={()=>{
          RemoveOnnItem(item)
        }}>
          Remove
        </button>
      </div>
    );
  })}
</div>
{/* <div>Total:{Total}</div> */}

</>


}
<div className="fixed bottom-5 right-5 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl text-xl font-bold">
  Total: ₹ {Total}
</div>
  </>
  )
}

export default App
