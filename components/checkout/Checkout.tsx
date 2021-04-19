import { FC, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Paypal from '../Paypal';

const promise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

type Props = {
	close: () => void;
	guild_name: string;
	guild_id: string;
};

const Checkout: FC<Props> = ({ close, guild_name, guild_id }) => {
	const [selectedTab, setSelectedTab] = useState<string>('card');
	return (
		<div className='relative'>
			<p className='text-secondary font-secondary text-md text-center mb-3 font-bold'>
				Payment Details
			</p>
			<div className='flex justify-between items-center py-3 text-center mb-5'>
				<div
					onClick={() => setSelectedTab('card')}
					className={`cursor-pointer flex-1 mx-1 pb-2 font-bold text-sm border-b-2 ${
						selectedTab === 'card'
							? 'text-tertiary border-tertiary'
							: 'text-textGrey border-textGrey'
					}`}
				>
					<p>Credit Card</p>
				</div>
				<div
					onClick={() => setSelectedTab('paypal')}
					className={`cursor-pointer flex-1 mx-1 pb-2 font-bold text-sm border-b-2 ${
						selectedTab === 'paypal'
							? 'text-tertiary border-tertiary'
							: 'text-textGrey border-textGrey'
					}`}
				>
					<p>Paypal</p>
				</div>
			</div>
			{selectedTab === 'card' && (
				<Elements stripe={promise}>
					<CheckoutForm close={close} guild_id={guild_id} guild_name={guild_name} />
				</Elements>
			)}
			{selectedTab === 'paypal' && (
				<div className='px-5' style={{ minWidth: 400, minHeight: 300 }}>
					<Paypal close={close} guild_id={guild_id} />
				</div>
			)}
		</div>
	);
};

export default Checkout;
