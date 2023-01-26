import {ServerLoggerInstance, serverLogger} from '@/server-logger/ServerLogger'

interface OpenedServerLoggerInterface {
    log: ServerLoggerInstance['log']
    getLoggerProps: ServerLoggerInstance['getLoggerProps']
    getAppLoggerProps: ServerLoggerInstance['getAppLoggerProps']
}

export const getServerLogger = (): OpenedServerLoggerInterface => serverLogger
