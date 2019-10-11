import express, { Application } from 'express'

export class Server {
  private app: Application = express()
  private readonly port: number

  constructor(port: number) {
    this.port = port
  }

  start() {
    return this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`)
    })
  }
}
