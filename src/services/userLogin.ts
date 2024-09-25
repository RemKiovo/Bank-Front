import axios from 'axios'

const loginUser = async (
	username: string,
	password: string
): Promise<string> => {
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
		console.error('Login failed:', error)
		throw new Error('Login failed. Please check your credentials.')
	}
}

export default loginUser
