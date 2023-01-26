import React, {ReactElement} from 'react'
import {GetServerSideProps} from 'next'
import {useRouter} from "next/router";
import {getServerLogger} from "@/server-logger";

export const getServerSideProps: GetServerSideProps = async () => {
    const serverLogger = getServerLogger()
    serverLogger.log('hello this is about getServerSideProps')
    return {
        props: {
            ...serverLogger.getLoggerProps()
        }
    }
}

export default function About(): ReactElement {
    const router = useRouter()
    const handleClick = (): void => {
        router.push('/')
    }
    return (
        <div>
            <h1>hello about</h1>
            <button onClick={handleClick}>GO TO HOME</button>
        </div>
    )
}
