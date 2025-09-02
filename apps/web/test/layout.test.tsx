import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import Layout from '@/app/layout'

vi.mock('next/font/google', () => ({
  Geist: () => ({
    style: {
      fontFamily: 'mocked'
    }
  })
}))

test('Layout', () => {
  render(
    <Layout>
      <h1>Layout</h1>
    </Layout>
  )
  expect(screen.getByRole('heading', { level: 1, name: 'Layout' })).toBeDefined()
})
