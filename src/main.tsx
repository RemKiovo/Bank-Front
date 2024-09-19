import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'

import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SignIn } from './pages/SignIn'
import { User } from './pages/User'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/user' element={<User />} />
			</Routes>
			<Footer />
		</Router>
	</StrictMode>
)
