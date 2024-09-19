import { NavLink, useLocation } from 'react-router-dom'

export const Header = () => {
	const currentPage = useLocation()

	if (currentPage.pathname === '/user') {
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
							Tony
						</NavLink>
						<NavLink className='main-nav-item' to='/'>
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
					<NavLink to='/sign-in' className='main-nav-item'>
						<i className='fa fa-user-circle'></i>
						Sign In
					</NavLink>
				</div>
			</nav>
		</header>
	)
}
