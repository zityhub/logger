import pino, { Logger as PinoLogger } from 'pino'

type Message = string | Record<string, unknown>

export default class Logger {
  private readonly logger: PinoLogger

  constructor(name: string, sync = true) {
    const env = process.env.NODE_ENV ?? 'development'
    const isProd = env === 'production'

    this.logger = isProd
      ? pino({ name, level: 'info' }, pino.destination({ minLength: 4096, sync }))
      : pino({
          name: `${name}-local`,
          level: 'info',
          transport: { target: 'pino-pretty', options: { colorize: true } }
        })
  }

  debug(message: Message): void {
    this.logger.debug(message)
  }

  error(message: Message): void {
    this.logger.error(message)
  }

  info(message: Message): void {
    this.logger.info(message)
  }
}
