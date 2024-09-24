import axios from 'axios'
import { store, userSlice } from '../store/store'

const loginUser = async (username: string, password: string): Promise<void> => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_API_URL}/user/login`,
			{
				email: username,
				password: password
			}
		)
		const token: string = response.data.body.token
		store.dispatch(userSlice.actions.setToken(token))
	} catch (error) {
		console.error('Login failed:', error)
		throw new Error('Login failed. Please check your credentials.')
	}
}

export default loginUser
