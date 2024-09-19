import { useEffect } from 'react'
import { Features } from '../components/Features'
import { FEATURES } from '../constants'

export const Home = () => {
	useEffect(() => {
		document.title = 'Argent Bank - Home Page'
	}, [])

	return (
		<main>
			<div className='hero'>
				<section className='hero-content'>
					<h2 className='sr-only'>Promoted Content</h2>
					<p className='subtitle'>No fees.</p>
					<p className='subtitle'>No minimum deposit.</p>
					<p className='subtitle'>High interest rates.</p>
					<p className='text'>Open a savings account with Argent Bank today!</p>
				</section>
			</div>
			<section className='features'>
				<h2 className='sr-only'>Features</h2>
				{FEATURES.map((feature) => (
					<Features key={feature.title} {...feature} />
				))}
			</section>
		</main>
	)
}
