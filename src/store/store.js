import { configureStore } from '@reduxjs/toolkit'

import { productSlice, uiSlice } from './'

export const store = configureStore({
  reducer: { product: productSlice.reducer, ui: uiSlice.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
