import express, { Application } from 'express';

export class Server {
  private app: Application
  private port: number

  constructor() {
    this.app = express()
    this.port = parseInt(process.env.SERVER_PORT || "3000");
  }
  
  start() {
    return this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`)
    })
  }
}