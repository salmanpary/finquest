import { BsFillCheckCircleFill } from 'react-icons/bs'
import styles from './pricing.module.css'

const plans = [
	{
		imageLink: '/images/options-trading-plan.png',
		planName: 'Options Trading',
		price: 4499,
		cutPrice: 4940,
		discount: '10% off',
		duration: 'Month',
		features: ['FNO trading', 'Stock options', 'Option buying', 'Option selling'],
	},
	{
		imageLink: '/images/student-plan.png',
		planName: 'Student',
		price: 7499,
		cutPrice: 8999,
		discount: '20% off',
		duration: 'Month',
		color: 'yellow',
		features: ['Intraday trading', 'Swing trading', 'Commodity', 'Long term'],
	},
	{
		imageLink: '/images/professional-plan.png',
		planName: 'Professional',
		price: 10399,
		cutPrice: 11959,
		discount: '15% off',
		duration: '2 Months',
		features: [
			'Intraday & swing trading',
			'Commodity',
			'Long term',
			'FNO trading',
			'Option buying',
			'Option selling',
		],
	},
]

export default function Pricing() {
	return (
		<section className={styles['pricing']}>
			<div className={styles['heading-wrapper']}>
				<h2>Memberships</h2>
				<p>A nunc lacus nisl, neque, quam. Vitae leo, eu nibh non in fermentum tincidunt.</p>
			</div>
			<div className={styles['cards-wrapper']}>
				{plans.map((item, index) => (
					<Card
						key={index}
						imageLink={item.imageLink}
						planName={item.planName}
						price={item.price}
						cutPrice={item.cutPrice}
						discount={item.discount}
						duration={item.duration}
						features={item.features}
						color={item.color}
					/>
				))}
			</div>
		</section>
	)
}

function Card({ imageLink, planName, price, cutPrice, discount, duration, features, color }) {
	return (
		<div className={`${styles['card']} ${color === 'yellow' ? styles['yellow-card'] : ''}`}>
			<div className={styles['image-container']} style={{ backgroundImage: `url('${imageLink}')` }}></div>
			<p className={styles['plan-name']}>{planName}</p>
			<div className='flex items-center mb-2'>
				<div className={styles['cut-price-wrapper']}>₹{cutPrice}</div>
				<div className={styles['discount']}>{discount}</div>
			</div>
			<div className={styles['price-wrapper']}>
				<h3>₹{price}</h3>
				<span>{'/ ' + duration}</span>
			</div>
			<ul className={styles['features']}>
				{features.map((item, index) => (
					<li key={index}>
						<BsFillCheckCircleFill className={styles['tick-icon']} /> <span>{item}</span>
					</li>
				))}
			</ul>
			<button className={styles['action-button']}>JOIN NOW</button>
		</div>
	)
}
