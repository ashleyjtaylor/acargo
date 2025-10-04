type Environment = 'development' | 'production' | 'test'

type Env = {
  NODE_ENV: Environment
  PORT: number
}

export const env = {
  NODE_ENV: (process.env.NODE_ENV as Environment) ?? 'development',
  PORT: Number(process.env.PORT ?? 3000)
} satisfies Env
