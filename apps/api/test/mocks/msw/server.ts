import { http } from 'msw'
import { setupServer } from 'msw/node'

import app from '@/app'
import { handlers } from './handlers'

export const server = setupServer(
  ...handlers,

  http.all('*', async ({ request }) => {
    return await app.fetch(request)
  })
)

server.events.on('request:unhandled', ({ request }) => {
  console.warn('[MSW] unhandled:', request.method, request.url)
})
