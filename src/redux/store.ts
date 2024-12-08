import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './sliceCart'

const store = configureStore({
  reducer: {
    cart: cartReducer
  }

})

export default store