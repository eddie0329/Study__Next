import {GetServerSideProps} from 'next'
import {getServerLogger} from "@/server-logger";
import {useRouter} from "next/router";

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
    const router = useRouter()
    const handleClick = (): void => {
        router.push('/about')
    }
    return (
        <>
            <div>
                <h1>Hello Home</h1>
                <button onClick={handleClick}>GO TO ABOUT</button>
            </div>
        </>
    )
}
