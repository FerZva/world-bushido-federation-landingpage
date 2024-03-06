// pages/api/payment.js
const paypal = require('@paypal/checkout-server-sdk');

// Crear un entorno de Sandbox (para pruebas)
const environment = new paypal.core.SandboxEnvironment(
  'Acoo8Nj6KYBnmWdvhe6pl1KwWlidh3oZUzD09QsSRNTKP2ZPLP6rX-tMdO392FCzjJ0Mx92qzENcTBS5',
  'EAlB0a__7dNvYlKPAfyRznQdaHISGVTxhCHgI_t7UKYYZJGK0eo8XobMeP3eha-pvKawFUzIIqCqaEEv'
);
const client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const request = new paypal.orders.OrdersCreateRequest();
      request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '10.00' // Aquí puedes poner el valor de tu producto
          }
        }]
      });
      
      const response = await client.execute(request);
      
      return res.status(200).json({ redirectUrl: response.result.links.find(link => link.rel === 'approve').href });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
