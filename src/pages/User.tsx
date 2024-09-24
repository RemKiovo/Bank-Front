import { EditNameButton } from '../components/EditNameButton'
import { AccountSection } from '../components/AccountSection'

import { ACCOUNTS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StoreProps } from '../store/store'
import { useEffect } from 'react'
import { getUserProfile } from '../services/userProfile'
import { userSlice } from '../store/store'

export const User = () => {
	const user = useSelector((state: StoreProps) => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (user.token) {
			getUserProfile(user.token).then((data: StoreProps | void) => {
				if (data) {
					dispatch(userSlice.actions.setUser(data))
				}
			})
		}
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
	}, [dispatch, user.token])

	useEffect(() => {
		if (!user.token) {
			navigate('/login')
		}
	}, [user.token, navigate])

	return (
		<main className='main bg-dark'>
			<div className='header'>
				<h1>
					Welcome back
					<br />
					{user.firstName} {user.lastName}!
				</h1>
				<EditNameButton />
			</div>
			<h2 className='sr-only'>Accounts</h2>
			{ACCOUNTS.map((account) => (
				<AccountSection key={account.title} {...account} />
			))}
		</main>
	)
}

export default User
