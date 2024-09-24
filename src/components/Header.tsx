import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { StoreProps, userSlice } from '../store/store'
import { useEffect } from 'react'
import { getUserProfile } from '../services/userProfile'

export const Header = () => {
	const user = useSelector((state: StoreProps) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
			const token =
				localStorage.getItem('token') || sessionStorage.getItem('token')
			dispatch(userSlice.actions.setToken(token))
			getUserProfile(token as string).then((data: StoreProps | void) => {
				if (data) {
					dispatch(userSlice.actions.setUser(data))
				}
			})
		}
	}, [dispatch])

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
						<NavLink
							className='main-nav-item'
							to='/'
							onClick={() => {
								dispatch(userSlice.actions.clearUser())
							}}
						>
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
