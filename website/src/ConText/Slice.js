import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  data: [],
  Total: 0,
  Showcart:false
}

let Slice = createSlice({
  name: 'AddtoCart',

  initialState,

  reducers: {

    AddToCart: (state, action) => {

      let exist = state.data.find(
        (item) => item.id === action.payload.id
      )

      if (exist) {

        state.data = state.data.map((item) => {

          if (item.id === action.payload.id) {

            return {
              ...item,
              quantity: item.quantity + 1
            }

          }

          return item

        })

      }

      else {

        state.data.push({
          ...action.payload,
          quantity: 1
        })

      }

    },
    RemoveByOne: (state, action) => {

  if (action.payload.quantity === 1) {

    state.data = state.data.filter(
      (item) => item.id !== action.payload.id
    )

  }

  else {

    state.data = state.data.map((item) => {

      if (item.id === action.payload.id) {

        return {
          ...item,
          quantity: item.quantity - 1
        }

      }

      return item

    })

  }

},
RemoveItem:(state,action)=>{
    let LatestData=state.data.filter((item)=>item.id!=action.payload.id)
    state.data=LatestData
},

TotalAmount: (state) => {
  let t = 0;
  state.data.forEach((item) => {
    // 1. Pehle price ko string me convert karenge
    let priceStr = String(item.new_price);
    
    // 2. '₹' ka symbol ya koi bhi non-number character hata denge
    // Isse "₹2199" badal kar sirf "2199" reh jayega
    let cleanPrice = priceStr.replace(/[^0-9.]/g, ""); 
    
    // 3. Ab isko safely Number me convert karke multiply karenge
    let price = Number(cleanPrice) || 0;
    let qty = Number(item.quantity) || 1;

    t += price * qty;
  });
  
  // State ka total update ho gaya
  state.Total = t;
},
OpenCart:(state,action)=>{
    state.Showcart=true;
},
CloseCart:(state,action)=>{
    state.Showcart=false
}
  }

})


export const { AddToCart,RemoveByOne,RemoveItem,TotalAmount,OpenCart,CloseCart } = Slice.actions

export default Slice.reducer