import { useEffect } from 'react'

import { EditNameButton } from '../components/EditNameButton'
import { AccountSection } from '../components/AccountSection'

import { ACCOUNTS } from '../constants'

export const User = () => {
	useEffect(() => {
		document.title = 'Argent Bank - Tony Jarvis'
	}, [])

	return (
		<main className='main bg-dark'>
			<div className='header'>
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
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
