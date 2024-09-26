import { useDispatch, useSelector } from 'react-redux'
import { userSlice, StoreProps } from '../store/store'
import { getUserProfile } from '../services/userProfile'
import changeName from '../services/userChangeName'
import { useCallback, useEffect } from 'react'
import { userLogin } from '../services/userLogin'

export const useUser = () => {
	const dispatch = useDispatch()
	const user = useSelector((state: StoreProps) => state.user)

	const login = async (
		username: string,
		password: string,
		rememberMe: boolean
	) => {
		const token = await userLogin(username, password)
		if (token) {
			dispatch(userSlice.actions.setToken(token))
			if (rememberMe) {
				localStorage.setItem('token', token)
			} else {
				sessionStorage.setItem('token', token)
			}
			await fetchUserProfile(token)
		}
	}

	const logout = useCallback(() => {
		dispatch(userSlice.actions.clearUser())
		localStorage.removeItem('token')
	}, [dispatch])

	const fetchUserProfile = useCallback(
		async (token: string) => {
			try {
				const data = await getUserProfile(token)
				if (data && !user.token) {
					dispatch(userSlice.actions.setUser(data))
				}
			} catch (error) {
				console.error('Error fetching user profile:', error)
				logout()
			}
		},
		[dispatch, logout, user.token]
	)

	const updateName = async (firstName: string, lastName: string) => {
		if (firstName !== user.firstName || lastName !== user.lastName) {
			await changeName(firstName, lastName)
			dispatch(userSlice.actions.setUser({ ...user, firstName, lastName }))
		}
	}

	const initializeUser = useCallback(() => {
		if (!user.token) {
			const token =
				localStorage.getItem('token') || sessionStorage.getItem('token')
			if (token) {
				dispatch(userSlice.actions.setToken(token))
				fetchUserProfile(token)
			}
		}
	}, [user.token, dispatch, fetchUserProfile])

	useEffect(() => {
		initializeUser()
	}, [initializeUser])

	return { user, login, logout, updateName }
}
