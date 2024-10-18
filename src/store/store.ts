import { createSlice, configureStore } from '@reduxjs/toolkit'

export interface StoreProps {
  user: {
    token: string
    firstName: string
    lastName: string
    email: string
  }
}

const initialState = {
  token: '',
  firstName: '',
  lastName: '',
  email: ''
}

/**
 * userSlice est une tranche de store Redux qui gère l'état de l'utilisateur.
 * Elle permet de stocker le token, le prénom, le nom, l'email de l'utilisateur.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    clearUser: (state) => {
      state.token = ''
      state.firstName = ''
      state.lastName = ''
      state.email = ''
    }
  }
})

export const store = configureStore({
  reducer: { user: userSlice.reducer }
})
