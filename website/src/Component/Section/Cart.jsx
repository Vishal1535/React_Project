import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, CloseCart, RemoveByOne, RemoveItem, TotalAmount } from "../../ConText/Slice";

export const Cart = ({ onClose }) => {
  const data = useSelector((state) => state.SliceReducer.data);
  let dispatch=useDispatch();
  let Amount=useSelector((state)=>state.SliceReducer.Total)
//   console.log(Amount);
  

  // NaN Error aur String-to-Number conversion ka pakka ilaaj
  const totalAmount = data.reduce((total, item) => {
    const price = Number(item.new_price) || 0;
    const qty = Number(item.quantity) || 1;
    return total + (price * qty);
  }, 0);
  useEffect(()=>{
    dispatch(TotalAmount())
  },[data])

  return (
    <>
      {/* Backdrop - Isko click karke cart close ho jayega */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999 transition-opacity duration-300"
      />

      {/* Center Wrapper - Screen ke center me fixed rakhne ke liye */}
      <div className="fixed inset-0 z-1000 flex items-center justify-center p-4 md:p-6 pointer-events-none">
        
        {/* Modal Sheet - Height strict control me hai taki screen se bahar na jaye */}
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden border border-gray-100 pointer-events-auto">
          
          {/* Header Section (Fixed) */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">Your Cart</h1>
              <span className="bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {data.length} {data.length === 1 ? 'Item' : 'Items'}
              </span>
            </div>
            <button
              onClick={()=>{
                dispatch(CloseCart())
                
              }}
              className="p-1.5 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body Section (Sirf ye scroll hoga) */}
          <div className="p-4 md:p-6 bg-gray-50/50 flex-1 overflow-y-auto min-h-0">
            {data.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🛒
                </div>
                <h3 className="text-base font-semibold text-gray-900">Your cart is empty</h3>
                <p className="text-xs text-gray-500 mt-1">Add some items to your cart!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200"
                  >
                    {/* Product Image */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                      <img
                        src={item.img}
                        alt={item.name || "Product"}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      {/* Product Name (Agar blank hoga toh 'Fashion Product' fallback dikhega) */}
                      <h2 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-1">
                        {item.name || "Fashion Product"}
                      </h2>
                      
                      {/* Prices */}
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-sm md:text-base font-bold text-gray-950">
                          ₹{item.new_price}
                        </span>
                        {item.old_price && (
                          <span className="text-xs line-through text-gray-400">
                            ₹{item.old_price}
                          </span>
                        )}
                      </div>

                      {/* Quantity Container */}
                      <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg w-max p-0.5">
                        <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white rounded-md hover:text-red-500 hover:shadow-sm transition font-medium" onClick={()=>{
                            dispatch(RemoveByOne(item))
                        }}>
                          −
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-gray-800">
                          {item.quantity || 1}
                        </span>
                        <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white rounded-md hover:text-green-600 hover:shadow-sm transition font-medium" onClick={()=>{
                            dispatch(AddToCart(item))
                        }}>
                          +
                        </button>
                      </div>
                    </div>

                    {/* Delete Icon Button */}
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition shrink-0" onClick={()=>{
                        dispatch(RemoveItem(item))
                    }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Section (Fixed at Bottom) */}
          {data.length > 0 && (
            <div className="p-4 md:p-5 border-t border-gray-100 bg-white flex items-center justify-between shrink-0">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Subtotal</p>
                <p className="text-xl md:text-2xl font-black text-gray-900">₹{Amount}</p>
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-xl transition shadow-lg shadow-red-500/15 text-sm md:text-base">
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};