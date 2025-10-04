import { describe, expect, it } from 'vitest'

import { env } from '@/env'

describe('App', () => {
  it('should return the correct environment variables', () => {
    expect(env.NODE_ENV).toBe('test')
  })

  it('should return the default port', () => {
    expect(env.PORT).toBe(3000)
  })
})
