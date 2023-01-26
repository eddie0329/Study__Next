import {GetServerSideProps} from 'next'
import {getServerLogger} from "@/server-logger";

export const getServerSideProps: GetServerSideProps = async () => {
    const serverLogger = getServerLogger()
    serverLogger.log('hello this is home getServerSideProps')
    return {
        props: {
            ...serverLogger.getLoggerProps()
        }
    }
}

export default function Home() {
    return (
        <>
            <h1>Hello world</h1>
        </>
    )
}
