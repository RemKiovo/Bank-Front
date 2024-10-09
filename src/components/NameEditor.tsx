import React, { useState } from 'react'
import { useUser } from '../hooks/useUser'

export const NameEditor = (): React.ReactNode => {
	const { updateName, user } = useUser()
	const [firstName, setFirstName] = useState(user.firstName || '')
	const [lastName, setLastName] = useState(user.lastName || '')
	const [isEditing, setIsEditing] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const nameRegex = /^[A-Za-z]+$/ // Regex to allow only letters

		if (firstName === '' || lastName === '') {
			setError('Names cannot be empty.')
			return
		}

		if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
			setError(
				'Names must contain only letters and cannot be empty or contain spaces.'
			)
			return
		}

		// Set the state after validation
		setFirstName(firstName)
		setLastName(lastName)

		await updateName(firstName, lastName)
		setIsEditing(false)
		setError(null)
	}

	const handleCancel = () => {
		setIsEditing(false)
		setError(null)
	}

	return (
		<div>
			<h2 className='header-title'>
				{user.firstName} {user.lastName}
			</h2>
			{isEditing ? (
				<form onSubmit={handleSave}>
					<div className='edit-name-inputs'>
						<input
							type='text'
							name='firstName'
							placeholder='First Name'
							required
							autoComplete='off'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							required
							autoComplete='off'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					{error && <p className='error-message'>{error}</p>}
					<div className='edit-name-buttons'>
						<button type='submit' className='edit-button'>
							Save
						</button>
						<button type='reset' className='edit-button' onClick={handleCancel}>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<button className='edit-button' onClick={() => setIsEditing(true)}>
					Edit Name
				</button>
			)}
		</div>
	)
}
