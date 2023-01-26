import React, {ReactElement, useEffect} from 'react'
import {SERVER_LOGGER_PROPS_KEY, SERVER_APP_LOGGER_PROPS_KEY} from '@/server-logger/constants'
import {serverLogger} from '@/server-logger'

interface ServerLoggerProviderProps {
    pageProps: any
    enable?: boolean
}

export default function ServerLoggerProvider({pageProps, enable = true}: ServerLoggerProviderProps): ReactElement {
    useEffect(() => {
        const loggerAppStack = pageProps[SERVER_APP_LOGGER_PROPS_KEY] ?? []
        const loggerServerStack = pageProps[SERVER_LOGGER_PROPS_KEY] ?? []
        serverLogger.setEnable(enable).setLoggerStack([...loggerAppStack, ...loggerServerStack]).printAll()
        delete pageProps[SERVER_APP_LOGGER_PROPS_KEY]
        delete pageProps[SERVER_LOGGER_PROPS_KEY]
    }, [pageProps])
    return <></>
}
