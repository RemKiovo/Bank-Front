import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useEffect } from 'react'

export const LoginForm = () => {
	const navigate = useNavigate()
	const { user, login } = useUser()

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const username = e.currentTarget.username.value
		const password = e.currentTarget.password.value
		const rememberMe = e.currentTarget.rememberMe.checked

		try {
			await login(username, password, rememberMe)
			navigate('/user')
		} catch (error) {
			console.error('Erreur lors de la connexion : ', error)
			alert('Mauvais identifiant ou mot de passe, veuillez réessayer')
		}
	}

	useEffect(() => {
		if (user.token) {
			navigate('/user')
		}
	}, [user.token, navigate])

	return (
		<form onSubmit={handleLogin}>
			<div className='input-wrapper'>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' />
			</div>
			<div className='input-wrapper'>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
			</div>
			<div className='input-remember'>
				<input type='checkbox' id='rememberMe' />
				<label htmlFor='rememberMe'>Remember me</label>
			</div>
			<button className='sign-in-button'>Log In</button>
		</form>
	)
}
