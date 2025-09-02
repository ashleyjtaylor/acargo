import express, { type Request, type Response } from 'express'

const app: express.Application = express()

app.set('trust proxy', true)
app.disable('x-powered-by')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'api' })
})

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

app.all('/*splat', (_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' })
})

export default app
