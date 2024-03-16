import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';

const clientId = "Ad4TxMZhXM-A2adm1IMaZwbKDsdgHUD_MqO5pgdUXtf3R9oSedAWY5ByATwHvK2uBhV4ycCOKPeYAGY4";
const clientSecret = "EGMpzuczsDi0KEFvsemmFtc7LVcqyMDkyx8mbA8dCvRmnMhQwlN2oVus9apqoH8vRhkzQXxRqLIqjT02";

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