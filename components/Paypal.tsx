import { PayPalButton } from 'react-paypal-button-v2';
import { FC, useState } from 'react';
import Success from './checkout/Success';
import { useGuildUpgradeMutation } from '../graphql/generated';
import Loading from '../components/Loading';

type Props = {
	close: () => void;
	guild_id: string;
};

declare global {
	interface Window {
		paypal: any;
	}
}

const Paypal: FC<Props> = ({ close, guild_id }) => {
	const [upgradeGuild] = useGuildUpgradeMutation();

	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<>
			{success && <Success close={close} />}
			{loading && <Loading />}
			<PayPalButton
				amount='0.01'
				shippingPreference='NO_SHIPPING'
				onSuccess={async () => {
					setLoading(true);
					setError('');
					await upgradeGuild({ variables: { guild_id } });
					setLoading(false);
					setSuccess(true);
				}}
				onError={(err) => {
					setError(err);
					setLoading(false);
					console.error(err);
				}}
				options={{
					clientId: process.env.PAYPAL_CLIENT_ID,
					currency: 'EUR',
				}}
			/>
			{error && <p className='mt-3 text-white text-center'>{error}</p>}
		</>
	);
};

export default Paypal;
