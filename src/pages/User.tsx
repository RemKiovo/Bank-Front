import { EditNameButton } from '../components/EditNameButton'
import { AccountSection } from '../components/AccountSection'
import { ACCOUNTS } from '../constants'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useEffect } from 'react'

export const User = () => {
	const { user } = useUser()
	const navigate = useNavigate()

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
					{user.firstName} {user.lastName}
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
