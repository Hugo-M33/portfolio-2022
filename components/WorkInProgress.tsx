import React, {useEffect, useState} from 'react'
import Head from "next/head";

const WorkInProgress = () => {
    const [dots, setDots] = useState("")

    useEffect(() => {
        const TO = setTimeout(() => setDots(prevState => {
            if (prevState === "...") return ""
            return prevState + "."
        }), 1000)

        return () => clearTimeout(TO)
    }, [dots])
    return (
        <main className={`h-screen w-screen bg-gray-600 grid place-items-center`}>
            <Head>
                <title>Hugo Martin - Portfolio</title>
            </Head>
            <div className={`text-left w-3/4`}>
                <h1 className={`text-emerald-100 uppercase text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold`}>Work In Progress{dots}</h1>
            </div>
        </main>
    )
}

export default WorkInProgress
