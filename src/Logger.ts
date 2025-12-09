import pino, { Logger as PinoLogger } from 'pino'

type Message = string | Record<string, unknown>

export default class Logger {
  private readonly logger: PinoLogger

  constructor(name: string, sync: boolean = true) {
    this.logger = this.getLogger(name, sync)
  }

  private getLogger(name: string, sync: boolean) {
    if (process.env.NODE_ENV === 'production') {
      return pino({ name, level: 'info' }, pino.destination({ sync, ...(!sync && { minLength: 4096 }) }))
    }
    return pino({
      name: `${name}-dev`,
      level: 'debug',
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
