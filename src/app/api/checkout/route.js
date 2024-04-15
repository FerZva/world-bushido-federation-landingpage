import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';

const clientId = "AeRwLnK1GJC9dC23rxdWmtpNeL7rimwW-37sOwr9a3y0hPZWlYJjMQVFo9jwy5kbObRW1_tBmP5ViyN1";
const clientSecret = "EHYX3BnElKgjbQP9fraEDVWMT4T6PV-6fNh0kPmY1L8CTviOPz5B11n4ttsq2fESj1mr_3gEWhbY1EE4";

const enviroment = new paypal.core.LiveEnvironment(clientId, clientSecret)

const client = new paypal.core.PayPalHttpClient(enviroment)

export async function POST(req) {
    const { productName, productPrice } = await req.json();
    
    const request = new paypal.orders.OrdersCreateRequest()

    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: productPrice,
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: productPrice
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
                            value: productPrice
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