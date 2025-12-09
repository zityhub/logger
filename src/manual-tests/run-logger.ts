import Logger from '../Logger.ts'

const env = process.env.NODE_ENV
const logger = new Logger(`manual-test-${env}`)

logger.debug(`debug message`)
logger.info({ msg: `info message`, user: 'alice' })
logger.error(`error message`)
process.stdout.write('--- script end ---\n')
