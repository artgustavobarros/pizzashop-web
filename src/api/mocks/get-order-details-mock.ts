import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      phone: '69 666 999',
      email: 'johndoe@example.com',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 1800,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'pizza-pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 800,
        product: { name: 'pizza-marguerita' },
        quantity: 2,
      },
    ],
  })
})
