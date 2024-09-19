import { Feature } from '../constants'

export const Features = ({ image, alt, title, description }: Feature) => {
	return (
		<div className='feature-item'>
			<img src={image} alt={alt} className='feature-icon' />
			<h3 className='feature-item-title'>{title}</h3>
			<p>{description}</p>
		</div>
	)
}
