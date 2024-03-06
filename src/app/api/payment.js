const paypal = require('@paypal/checkout-server-sdk');

//Creating an enviroment
let clientId = "Acoo8Nj6KYBnmWdvhe6pl1KwWlidh3oZUzD09QsSRNTKP2ZPLP6rX-tMdO392FCzjJ0Mx92qzENcTBS5";
let clientSecret = "EAlB0a__7dNvYlKPAfyRznQdaHISGVTxhCHgI_t7UKYYZJGK0eo8XobMeP3eha-pvKawFUzIIqCqaEEv";

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
          },
        },
      ],
    });
    const response = await client.execute(request);

    return res.json({ id: response.result.id });
  }
}