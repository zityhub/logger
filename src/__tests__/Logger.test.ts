import { vi, describe, it, expect } from 'vitest'
import Logger from '../Logger.js'

const mockedPino = { debug: vi.fn(), info: vi.fn(), error: vi.fn() }
vi.mock('pino', async () => {
  return { default: vi.fn(() => mockedPino) }
})

describe('Logger', () => {
  const logger = new Logger('test-logger')
  it('should log debug', () => {
    logger.debug('debug message')
    expect(mockedPino.debug).toHaveBeenCalledWith('debug message')
  })
  it('should log error', () => {
    logger.error('error message')
    expect(mockedPino.error).toHaveBeenCalledWith('error message')
  })
  it('should log info', () => {
    logger.info('info message')
    expect(mockedPino.info).toHaveBeenCalledWith('info message')
  })
})
