import app from './app'

const port = process.env.PORT ?? 4000

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

let shuttingDown = false

const shutdown = (signal: string) => {
  console.log(signal, 'signal received: closing HTTP server')

  if (shuttingDown) return

  shuttingDown = true

  server.close(() => {
    process.exit(0)
  })

  setTimeout(() => {
    process.exit(1)
  }, 10_000).unref()
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))

process.on('unhandledRejection', () => {
  shutdown('unhandledRejection')
})

process.on('uncaughtException', () => {
  shutdown('uncaughtException')
})
