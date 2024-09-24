import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'

import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { User } from './pages/User'
import { Login } from './pages/Login'
import { Error } from './pages/Error'
import { Provider } from 'react-redux'

import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/user' element={<User />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</Provider>
	</StrictMode>
)
