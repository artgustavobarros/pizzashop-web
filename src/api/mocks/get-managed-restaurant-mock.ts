import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-manager-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', async () => {
  return HttpResponse.json({
    id: 'customer-restaurant-id',
    managerId: 'customer-user-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    createdAt: new Date(),
    updatedAt: null,
  })
})
