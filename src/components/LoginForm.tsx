import loginUser from '../services/userLogin'

import { useNavigate } from 'react-router-dom'
import { store } from '../store/store'
import { useEffect } from 'react'

export const LoginForm = () => {
	const navigate = useNavigate()

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(e.currentTarget)
		const username = e.currentTarget.username.value
		const password = e.currentTarget.password.value
		const rememberMe = e.currentTarget.rememberMe.checked

		try {
			await loginUser(username, password)
			navigate('/user')
		} catch (error) {
			console.error('Erreur lors de la connexion : ', error)
			alert('Mauvais identifiant ou mot de passe, veuillez réessayer')
		}

		if (rememberMe) {
			localStorage.setItem('token', store.getState().user.token)
		} else {
			sessionStorage.setItem('token', store.getState().user.token)
		}
	}

	const userToken =
		localStorage.getItem('token') || sessionStorage.getItem('token')
	useEffect(() => {
		if (userToken) {
			navigate('/user')
		}
	}, [userToken, navigate])

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
