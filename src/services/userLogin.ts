import axios from 'axios'

export const userLogin = async (username: string, password: string) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_API_URL}/user/login`,
			{
				email: username,
				password: password
			}
		)
		return response.data.body.token
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (!error.response) {
				throw new Error('Server is offline')
			}
			throw new Error(error.response?.data?.message || 'Login failed')
		}
		throw error
	}
}
