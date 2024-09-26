import React, { useState } from 'react'
import { useUser } from '../hooks/useUser'

export const EditNameButton: React.FC = () => {
	const { updateName } = useUser()
	const [isEditing, setIsEditing] = useState(false)

	const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget as HTMLFormElement
		const firstName = form.elements.namedItem('firstName') as HTMLInputElement
		const lastName = form.elements.namedItem('lastName') as HTMLInputElement

		if (!isNaN(Number(firstName.value)) || !isNaN(Number(lastName.value))) {
			alert("Numbers aren't allowed")
			return
		}
		await updateName(firstName.value, lastName.value)
		setIsEditing(false)
	}

	const handleCancel = () => {
		setIsEditing(false)
	}

	if (isEditing) {
		return (
			<form onSubmit={handleSave}>
				<div className='edit-name-inputs'>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						required
						autoComplete='off'
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						required
						autoComplete='off'
					/>
				</div>
				<div className='edit-name-buttons'>
					<button type='submit' className='edit-button'>
						Save
					</button>
					<button type='reset' className='edit-button' onClick={handleCancel}>
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
