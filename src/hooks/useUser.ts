import { useDispatch, useSelector } from 'react-redux'
import { userSlice, StoreProps } from '../store/store'
import { getUserProfile } from '../services/userProfile'
import changeName from '../services/userChangeName'
import { useCallback, useEffect } from 'react'
import { userLogin } from '../services/userLogin'

export interface User {
  token: string
  email: string
  firstName: string
  lastName: string
}

export const useUser = (): object => {
  const dispatch = useDispatch()
  const user = useSelector((state: StoreProps) => state.user)

  /**
   * @description Cette fonction permet de connecter l'utilisateur à l'application. Elle récupère le token de l'utilisateur et le stocke dans le store Redux. Elle permet également de sauvegarder le token dans le localStorage si l'utilisateur a coché la case "Se souvenir de moi".
   */
  const login = async (
    username: string,
    password: string,
    rememberMe: boolean
  ) => {
    const token = await userLogin(username, password)
    if (token) {
      dispatch(userSlice.actions.setToken(token))
      if (rememberMe) {
        sessionStorage.setItem('email', username)
        sessionStorage.setItem('rememberMe', 'true')
      } else {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('rememberMe')
      }
      await fetchUserProfile(token)
    }
  }

  const logout = useCallback(() => {
    dispatch(userSlice.actions.clearUser())
    if (sessionStorage.getItem('rememberMe') !== 'true') {
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('rememberMe')
    }
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

  /**
   * @description Cette fonction permet de mettre à jour le nom et le prénom de l'utilisateur. Elle vérifie si le nom et le prénom ont changé et si c'est le cas, elle appelle la fonction changeName pour mettre à jour le nom et le prénom dans l'API et dans le store Redux.
   */
  const updateName = async (firstName: string, lastName: string) => {
    if (firstName !== user.firstName || lastName !== user.lastName) {
      await changeName(firstName, lastName)
      dispatch(userSlice.actions.setUser({ ...user, firstName, lastName }))
    }
  }

  /**
   * @description Cette fonction permet d'initialiser l'utilisateur. Elle vérifie si le token existe dans le localStorage ou dans le sessionStorage et si c'est le cas, elle appelle la fonction fetchUserProfile pour récupérer les informations de l'utilisateur dans l'API et les stocker dans le store Redux.
   */
  const initializeUser = useCallback(() => {
    if (!user.token) {
      const token = sessionStorage.getItem('token')
      if (token) {
        dispatch(userSlice.actions.setToken(token))
        fetchUserProfile(token)
      }
    }

    if (!user.email) {
      const savedEmail = sessionStorage.getItem('email')
      if (savedEmail) {
        dispatch(userSlice.actions.setEmail(savedEmail))
      }
    }
  }, [user.token, dispatch, fetchUserProfile, user.email])

  useEffect(() => {
    if (user.token) {
      initializeUser()
    }
  }, [initializeUser, user.token])

  return { user, login, logout, updateName }
}
