// pages/api/payment.js
const paypal = require('@paypal/checkout-server-sdk');

// Crear un entorno de Sandbox (para pruebas)
const environment = new paypal.core.SandboxEnvironment(
  'Ad4TxMZhXM-A2adm1IMaZwbKDsdgHUD_MqO5pgdUXtf3R9oSedAWY5ByATwHvK2uBhV4ycCOKPeYAGY4',
  'EGMpzuczsDi0KEFvsemmFtc7LVcqyMDkyx8mbA8dCvRmnMhQwlN2oVus9apqoH8vRhkzQXxRqLIqjT02'
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
