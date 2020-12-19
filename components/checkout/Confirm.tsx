import { FC, useState, Dispatch, SetStateAction } from 'react'
import { useStripeCheckoutCreateMutation, useGuildUpgradeMutation, Guild } from '../../graphql/generated'
import { useStripe } from "@stripe/react-stripe-js";
import { Stripe, StripeCardNumberElement } from '@stripe/stripe-js';
import Button from '../Button'
import ButtonLoading from '../ButtonLoading';

type Props = {
    email: string,
    cardElement: StripeCardNumberElement,
    setSucceeded: Dispatch<SetStateAction<boolean>>,
    guild_name: string
    guild_id: string,
    name: string
}

const Confirm: FC<Props> = ({ email, cardElement, setSucceeded, guild_name, guild_id, name }) => {
    
    const stripe: Stripe = useStripe();

    const [upgradeGuild] = useGuildUpgradeMutation()
    const [createIntent] = useStripeCheckoutCreateMutation()
    
    const [processing, setProcessing] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const pay = async() => {
        setProcessing(true);
        try {
            const { data } = await createIntent({ variables: { 
                email,
                guild_id,
                guild_name,
                name
            } })
            const clientSecret = data.stripeCheckoutCreate
    
            if(clientSecret){
                const payload = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                    card: cardElement
                  }
                });
                if (payload.error) {
                  setError(`Payment failed ${payload.error.message}`);
                  setProcessing(false);
                } else {
                  setError('');
                  await upgradeGuild({ variables: { guild_id } })
                  setProcessing(false);
                  setSucceeded(true);
                }
            }
        } catch(err) {
            setError(`Payment failed ${err.message}`);        
            setProcessing(false);
        }
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-secondary z-10 font-secondary">

            <div className="rounded-full h-20 w-20 bg-bgColor flex justify-center items-center mb-8 mx-auto">
                <img src="/assets/logo.png" className="w-14" alt="Yello Logo"/>
            </div>

            <div className="mb-8 rounded px-5 py-3 flex justify-between items-center bg-bgColor text-white font-secondary text-sm font-medium">
                <span>YELLO Premium - Lifetime</span>
                <span>$4.99</span>
            </div>

            <div className="mb-12 flex flex-col text-sm">
                <div className="flex justify-start items-center h-12 my-2">
                    <div className="w-1 h-full mr-3 rounded bg-primary" />
                    <div className="flex flex-col items-start">
                        <span className="text-textGrey font-medium opacity-50">Email</span>
                        <span className="text-white font-medium">{email}</span>
                    </div>
                </div>
                <div className="flex justify-start items-center h-12 my-2">
                    <div className="w-1 h-full mr-3 rounded bg-primary" />
                    <div className="flex flex-col items-start">
                        <span className="text-textGrey font-medium opacity-50">Server</span>
                        <span className="text-white font-medium">{guild_name}</span>
                    </div>
                </div>
            </div>

            {error && (
                <p className="mt-3 text-white text-center text-sm">
                  {error}
                </p>
            )}

            {processing ?
                <ButtonLoading loader="/assets/loader.svg" disabled={true}  className="w-full mt-3" />
                :
                <Button blue text="Pay $4.99" disabled={processing} className="w-full mt-3" onClick={() => pay()}/>
            }

            <p className="mt-3 text-textGrey text-sm text-center font-medium">Secure Checkout</p>

            <p className="mt-3 pb-3 text-textGrey text-sm font-medium"> You may be redirected to your bank page for 3D secure verification.</p>

        </div>
    )
}

export default Confirm
