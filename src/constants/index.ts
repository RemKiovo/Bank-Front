export interface Account {
	title: string
	amount: string
	description: string
}

export const ACCOUNTS: Account[] = [
	{
		title: 'Argent Bank Checking (x8349)',
		amount: '$2,082.79',
		description: 'Available Balance'
	},
	{
		title: 'Argent Bank Savings (x6712)',
		amount: '$10,928.42',
		description: 'Available Balance'
	},
	{
		title: 'Argent Bank Credit Card (x8349)',
		amount: '$184.30',
		description: 'Current Balance'
	}
]

export interface Feature {
	image: string
	alt: string
	title: string
	description: string
}

export const FEATURES: Feature[] = [
	{
		image: '/img/icon-chat.png',
		alt: 'Chat Icon',
		title: 'You are our #1 priority',
		description:
			'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
	},
	{
		image: '/img/icon-money.png',
		alt: 'Money Icon',
		title: 'More savings means higher rates',
		description:
			'The more you save with us, the higher your interest rate will be!'
	},
	{
		image: '/img/icon-security.png',
		alt: 'Security Icon',
		title: 'Security you can trust',
		description:
			'We use top of the line encryption to make sure your data and money is always safe.'
	}
]
