import axios from 'axios'
import { store, userSlice } from '../store/store'

export const getUserProfile = async (token: string): Promise<void> => {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/user/profile`,
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)
	store.dispatch(userSlice.actions.setUser(response.data.body))
}
