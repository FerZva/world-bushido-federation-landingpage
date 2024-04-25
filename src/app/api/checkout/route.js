import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';

const clientId = "AdR40D-YswNpwiDORIDqz25sQlSukKs_b00XJhQnUsK5cqVK0xnjO2WCaPqg6glniL6RwyQEToSIDGIy";
const clientSecret = "EEayO7_PS3owbwkn3qqStG2rcJqL9XbpH9tYXI-Mn6c8uV6wXRw6Hen5BxJZZc2M-_aIuklc-UKUStE2";

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