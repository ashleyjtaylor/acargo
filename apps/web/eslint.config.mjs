import { dirname } from 'node:path'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import { eslintBaseConfig } from '@acargo/eslint-config/base.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...eslintBaseConfig,
  ...compat.extends('next/core-web-vitals', 'next/typescript')
]

export default eslintConfig
