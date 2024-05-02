// function CheckoutForm({ price, productName }) {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentApproved, setPaymentApproved] = useState(false);
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       if (!stripe || !elements) {
//         return;
//       }
  
//       const cardElement = elements.getElement(CardElement);
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//       });
  
//       if (error) {
//         console.log('[error]', error);
//         return;
//       }
  
//       const res = await fetch('/api/payment_intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ paymentMethodId: paymentMethod.id, productName, price }),
//       });
  
//       const paymentIntentResponse = await res.json();
  
//       if (paymentIntentResponse.error) {
//         console.log('[error]', paymentIntentResponse.error);
//         return;
//       }
  
//       const confirmResult = await stripe.confirmCardPayment(paymentIntentResponse.clientSecret);
//       if (confirmResult.error) {
//         console.log('[error]', confirmResult.error);
//       } else {
//         if (confirmResult.paymentIntent.status === 'succeeded') {
//           setPaymentApproved(true);
//         }
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe}>
//           Pay ${price}
//         </button>
//         {paymentApproved && (
//           <div>
//             <h2>Thanks for joining us!</h2>
//             <p>Here there is the rules of our World Bushido Academy</p>
//             <button><Link href={"https://drive.google.com/file/d/1o3SyDH1TQ9ImK1NlHbcT7E6ZixVxYsj6/view?usp=drive_link"}>Download the WBF Rules</Link></button>
//           </div>
//         )}
//       </form>
//     );
//   }
  