import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentFormContainer, FormContainer, PaymentButton } from './styled'

import { selectCurrentUser } from '../../store/selectors/userSelectors'
import { selectCartTotal } from '../../store/selectors/cartSelectors'

export const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const currentUser = useSelector(selectCurrentUser)
  const cartTotal = useSelector(selectCartTotal)
  const amount = Math.round(cartTotal * 100)

  const paymentHandler = async e => {
    e.preventDefault()
    if (!stripe || !elements) return
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    }).then(res => res.json())

    const client_secret = response.paymentIntent.client_secret
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName ? currentUser.displayName : 'Guest',
          email: currentUser.email ? currentUser.email : null,
        },
      },
    })
    setIsProcessingPayment(false)
    if (paymentResult.error) {
      console.log(paymentResult)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />

        <PaymentButton isLoading={isProcessingPayment} buttonType="base">
          Pagar
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}
