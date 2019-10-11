import { Server } from './server'

if (process.env.PORT) {
  const port: number = parseInt(process.env.PORT) || 4000
  const server = new Server(port).start()
} else {
  console.log('ERROR: process.env.PORT is empty')
  process.exit(1)
}
