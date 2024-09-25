import React, { useState } from 'react'
import { useUser } from '../hooks/useUser'

export const EditNameButton: React.FC = () => {
	const { user, updateName } = useUser()
	const [isEditing, setIsEditing] = useState(false)
	const [newFirstName, setNewFirstName] = useState(user.firstName)
	const [newLastName, setNewLastName] = useState(user.lastName)

	const handleSave = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!isNaN(Number(newFirstName)) || !isNaN(Number(newLastName))) {
			alert("Numbers aren't allowed")
			return
		}
		await updateName(newFirstName, newLastName)
		setIsEditing(false)
	}

	const handleCancel = () => {
		setNewFirstName(user.firstName)
		setNewLastName(user.lastName)
		setIsEditing(false)
	}

	if (isEditing) {
		return (
			<form onSubmit={handleSave}>
				<div className='edit-name-inputs'>
					<input
						type='text'
						value={newFirstName}
						placeholder='First Name'
						onChange={(e) => setNewFirstName(e.target.value)}
						required
					/>
					<input
						type='text'
						value={newLastName}
						placeholder='Last Name'
						onChange={(e) => setNewLastName(e.target.value)}
						required
					/>
				</div>
				<div className='edit-name-buttons'>
					<button type='submit' className='edit-button'>
						Save
					</button>
					<button type='button' className='edit-button' onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</form>
		)
	}

	return (
		<button className='edit-button' onClick={() => setIsEditing(true)}>
			Edit Name
		</button>
	)
}
