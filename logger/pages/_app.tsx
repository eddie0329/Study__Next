import type {AppProps} from 'next/app'
import {ServerLoggerProvider, getServerLogger} from 'server-logger'

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ServerLoggerProvider pageProps={pageProps}/>
            <Component {...pageProps} />
        </>
    )
}

App.getInitialProps = () => {
    const serverLogger = getServerLogger()
    serverLogger.log('hello this is app getInitialProps')
    return {
        pageProps: {
            ...serverLogger.getAppLoggerProps()
        }
    }
}
