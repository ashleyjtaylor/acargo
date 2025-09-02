import request from 'supertest'
import { describe, it } from 'vitest'

import app from '@/app'

describe('health', () => {
  it('GET /health → 200', async () => {
    await request(app)
      .get('/health')
      .expect('content-type', /json/)
      .expect(200, { status: 'ok' })
  })
})
