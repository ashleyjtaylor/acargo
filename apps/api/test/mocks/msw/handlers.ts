import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get(`${process.env.BASE_URL}/mock`, () => {
    return HttpResponse.json({ msw: 'ok' })
  })
]
