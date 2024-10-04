import { createSlice, configureStore } from '@reduxjs/toolkit'

export interface StoreProps {
	user: {
		token: string
		firstName: string
		lastName: string
		email: string // Add this line
	}
}

const initialState = {
	token: '',
	firstName: '',
	lastName: '',
	email: '' // Add this line
}

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
			// Add this reducer
			state.email = action.payload
		},
		clearUser: (state) => {
			state.token = ''
			state.firstName = ''
			state.lastName = ''
			state.email = '' // Add this line
			localStorage.removeItem('token')
			localStorage.removeItem('email') // Add this line
			sessionStorage.removeItem('token')
		}
	}
})

export const store = configureStore({
	reducer: { user: userSlice.reducer }
})
