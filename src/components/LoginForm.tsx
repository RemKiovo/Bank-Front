import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { User, useUser } from '../hooks/useUser'
export const LoginForm = () => {
  const { user, login } = useUser() as {
    user: User
    login: (username: string, password: string, rememberMe: boolean) => void
  }
  const navigate = useNavigate()

  const [username, setUsername] = useState(
    user.email || sessionStorage.getItem('email') || ''
  )
  const [password, setPassword] = useState<string>('')
  const [rememberMe, setRememberMe] = useState<boolean>(
    sessionStorage.getItem('rememberMe') === 'true'
  )
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await login(username, password, rememberMe)
      navigate('/user')
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        if (error.message === 'Server is offline') {
          setError('Le serveur est hors ligne. Veuillez réessayer plus tard.')
        } else {
          setError('Mauvais identifiant ou mot de passe, veuillez réessayer')
        }
      }
    }
  }

  useEffect(() => {
    if (user.token) {
      navigate('/user')
    }
  }, [user.token, navigate])

  return (
    <form onSubmit={handleLogin}>
      <div className='input-wrapper'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='input-remember'>
        <input
          type='checkbox'
          id='rememberMe'
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor='rememberMe'>Remember me</label>
      </div>
      <button className='sign-in-button'>Log In</button>
      {error && <div className='error-message'>{error}</div>}
    </form>
  )
}
