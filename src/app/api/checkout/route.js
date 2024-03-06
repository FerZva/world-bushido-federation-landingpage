import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';

const clientId = "Acoo8Nj6KYBnmWdvhe6pl1KwWlidh3oZUzD09QsSRNTKP2ZPLP6rX-tMdO392FCzjJ0Mx92qzENcTBS5";
const clientSecret = "EAlB0a__7dNvYlKPAfyRznQdaHISGVTxhCHgI_t7UKYYZJGK0eo8XobMeP3eha-pvKawFUzIIqCqaEEv";

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret)

const client = new paypal.core.PayPalHttpClient(enviroment)

export async function POST() {
    
    const request = new paypal.orders.OrdersCreateRequest()

    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "100.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "100.00"
                        }
                    }
                },
                items: [
                    {
                        name: "book of next",
                        description: "book about next",
                        quantity: "1",
                        unit_amount: {
                            currency_code: "USD",
                            value: "100.00"
                        }
                    }
                ]
            }
        ]
    })

    const response = await client.execute(request) 
    console.log(response)

    return NextResponse.json({
        id: response.result.id
    })
}