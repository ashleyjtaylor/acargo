import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './test/mocks/msw/server'
 
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
