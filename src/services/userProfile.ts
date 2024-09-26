import axios from 'axios'
import { StoreProps } from '../store/store'
export const getUserProfile = async (token: string): Promise<StoreProps> => {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/user/profile`,
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)
	return response.data.body
}
