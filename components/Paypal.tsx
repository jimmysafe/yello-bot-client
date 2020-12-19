import { useRef, useEffect, FC, useState } from 'react'
import Success from './checkout/Success'
import { useGuildUpgradeMutation } from '../graphql/generated'
import Loading from '../components/Loading'

type Props = {
  close: () => void,
  guild_id: string
}

declare global {
  interface Window { paypal: any; }
}


const Paypal: FC<Props> = ({ close, guild_id }) => {

  const [upgradeGuild] = useGuildUpgradeMutation()

  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const paypalRef: any = useRef();

  useEffect(() => {
      window.paypal
      .Buttons({
        createOrder: (_, actions:any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Yello Premium - Lifetime Plan",
                amount: {
                  currency_code: "EUR",
                  value: 4.99,
                },
              },
            ],
          });
        },
        onApprove: async (_, actions: any) => {
          setLoading(true)
          await actions.order.capture();
          setError('')
          await upgradeGuild({ variables: { guild_id } })
          setLoading(false)
          setSuccess(true)
        },
        onError: (err) => {
          setError(err)
          setLoading(false)
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [])
  
  return (
      <>
      {success && <Success close={close}/>}
      {loading && <Loading /> }
      <div ref={paypalRef} />
      {error && (
        <p className="mt-3 text-white text-center">
          {error}
        </p>
      )}
      </>
  )
}

export default Paypal
