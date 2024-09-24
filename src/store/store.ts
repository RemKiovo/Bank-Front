import { createSlice, configureStore } from '@reduxjs/toolkit'

export interface StoreProps {
	user: {
		token: string
		firstName: string
		lastName: string
	}
}

const initialState = {
	token: '',
	firstName: '',
	lastName: ''
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
		clearUser: (state) => {
			state.token = ''
			state.firstName = ''
			state.lastName = ''
			localStorage.removeItem('token')
			sessionStorage.removeItem('token')
		}
	}
})

export const store = configureStore({
	reducer: { user: userSlice.reducer }
})
