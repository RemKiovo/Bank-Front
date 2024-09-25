import { NavLink } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export const Header = () => {
	const { user, logout } = useUser()

	if (user.token) {
		return (
			<header>
				<nav className='main-nav'>
					<NavLink className='main-nav-logo' to='/'>
						<img
							className='main-nav-logo-image'
							src='./img/argentBankLogo.png'
							alt='Argent Bank Logo'
						/>
						<h1 className='sr-only'>Argent Bank</h1>
					</NavLink>
					<div className='main-nav-items'>
						<NavLink className='main-nav-item' to='/user'>
							<i className='fa fa-user-circle'></i>
							{user.firstName}
						</NavLink>
						<NavLink className='main-nav-item' to='/' onClick={logout}>
							<i className='fa fa-sign-out'></i>
							Sign Out
						</NavLink>
					</div>
				</nav>
			</header>
		)
	}

	return (
		<header>
			<nav className='main-nav'>
				<NavLink className='main-nav-logo' to='/'>
					<img
						className='main-nav-logo-image'
						src='./img/argentBankLogo.png'
						alt='Argent Bank Logo'
					/>
					<h1 className='sr-only'>Argent Bank</h1>
				</NavLink>
				<div className='main-nav-items'>
					<NavLink to='/login' className='main-nav-item'>
						<i className='fa fa-user-circle'></i>
						Log In
					</NavLink>
				</div>
			</nav>
		</header>
	)
}
