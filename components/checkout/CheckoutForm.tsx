import { FC, SyntheticEvent, useState, useRef } from 'react'
import { CardNumberElement, useStripe, useElements, CardExpiryElement, CardCvcElement,   } from "@stripe/react-stripe-js";
import { StripeElements, StripeCardNumberElement } from '@stripe/stripe-js';

import Button from '../Button'
import Confirm from './Confirm';
import Success from './Success';
import { Guild } from '../../graphql/generated';

type Props = {
  close: () => void,
  guild_id: string,
  guild_name: string
}

const CheckoutForm: FC<Props> = ({ close, guild_id, guild_name }) => {

    const firstName = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);
    const [succeeded, setSucceeded] = useState<boolean>(false);
    const [cardElement, setCardElement] = useState<StripeCardNumberElement | null>(null)

    const elements: StripeElements = useElements();

    const handleChange = async(e: any) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    const handleSubmit = async(e: SyntheticEvent) => {
        e.preventDefault();

        const element = elements.getElement(CardNumberElement)
        setCardElement(element)
    };

  const cardStyles = { 
    base: { 
      fontFamily: 'Montserrat, sans-serif',
      '::placeholder': { 
          color: '#AAAAAA' 
      } 
    } 
  }

    return (
      <>
        {succeeded && <Success close={close}/>}
        {cardElement && <Confirm cardElement={cardElement} email={email.current.value} setSucceeded={setSucceeded} guild_id={guild_id} guild_name={guild_name} name={`${firstName.current.value} ${lastName.current.value}`}/>}
        <form onSubmit={handleSubmit} className="text-sm">

          <div className="w-full flex">
            <input 
                ref={firstName}
                required
                type="text"
                className="bg-white w-1/2 px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey mr-1" 
                placeholder="First Name"
            />
            <input 
                ref={lastName}
                required
                type="text"
                className="bg-white w-1/2 px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey ml-1" 
                placeholder="Last Name"
            />
          </div>
          <div className="w-full">
            <input 
                ref={email}
                required
                type="email"
                className="bg-white w-full px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey" 
                placeholder="Your Email Address"
            />
          </div>
          <div className="w-full mb-2">
            <CardNumberElement id="card-element" options={{ placeholder: 'Card Number', style: cardStyles  }} onChange={handleChange} className="bg-white px-5 py-3 rounded-sm "/>
          </div>
          <div className="w-full flex mb-2">
            <CardExpiryElement options={{ placeholder: "Card Expiry Date", style: cardStyles }} className="w-1/2 bg-white px-5 py-3 rounded-sm mr-1" />
            <CardCvcElement options={{ placeholder: 'CVC', style: cardStyles }}  className="w-1/2 bg-white px-5 py-3 rounded-sm ml-1" />
          </div>
          <div className="w-full">
            <input 
              type="text"
              className="bg-white w-full px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey" 
              placeholder="Address Line 1 (Optional)"
            />
          </div>
          <div className="w-full flex">
            <input 
              type="text"
              className="bg-white w-1/2 px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey mr-1" 
              placeholder="State (Optional)"
            />
            <input 
              type="text"
              className="bg-white w-1/2 px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey ml-1" 
              placeholder="Country (Optional)"
            />
          </div>
          <div className="w-full flex">
            <input 
              type="text"
              className="bg-white w-1/2 px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey mr-1" 
              placeholder="City (Optional)"
            />
            <input 
              type="text"
              className="bg-white w-1/2 px-5 py-3 mb-2 rounded-sm text-secondary font-secondary focus:outline-none placeholder-textGrey ml-1" 
              placeholder="Zip (Optional)"
            />
          </div>

          
          {error && (
                <p className="mt-3 text-white text-center">
                  {error}
                </p>
            )}
          
          <Button blue text="Next" disabled={disabled || !!error} className="w-full mt-3"/>

        </form>
      </>
    )
}

export default CheckoutForm
