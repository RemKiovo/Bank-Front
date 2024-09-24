import { useEffect } from 'react'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
	useEffect(() => {
		document.title = 'Argent Bank - Log In'
	}, [])

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Log In</h1>
				<LoginForm />
			</section>
		</main>
	)
}
