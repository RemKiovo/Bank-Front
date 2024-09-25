import axios from 'axios'
import { store } from '../store/store'

const changeName = async (firstName: string, lastName: string) => {
	try {
		const token = store.getState().user.token
		const response = await axios.put(
			`${import.meta.env.VITE_API_URL}/user/profile`,
			{
				firstName,
				lastName
			},
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		return response.data
	} catch (error) {
		console.error('Error changing name:', error)
		throw new Error('Error changing name')
	}
}

export default changeName
