import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('GET /', async () => {
    const res = await fetch(`${process.env.BASE_URL}`)

    expect(res.ok).toBe(true)
    expect(await res.json()).toEqual({ message: 'ok' })
  })

  it('GET /health', async () => {
    const res = await fetch(`${process.env.BASE_URL}/health`)

    expect(res.ok).toBe(true)
    expect(await res.json()).toEqual({ status: 'ok' })
  })
})
