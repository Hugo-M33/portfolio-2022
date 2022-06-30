import React, {useEffect, useState} from 'react'
import Head from "next/head";
import Card from "./Card";
import Button from "./Button";

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
        <main className={`h-screen w-screen bg-dark-shades grid place-items-center`}>
            <Head>
                <title>Hugo Martin - Portfolio</title>
            </Head>
            <Card variant={'light'} className={`text-left w-3/4 h-3/4 p-8 flex flex-col items-center justify-between`}>
                <h1 className={`uppercase text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold`}>Work In Progress{dots}</h1>
                <span className={'text-8xl'}>🚧</span>
                <p className={`px-16 text-xl lg:text-2xl`}>My portfolio is under construction, in order to accurately showcase the quality of my work. Please come back later </p>
                <div className={`flex justify-between w-full`}>
                    <Button as={'a'} href={'mailto:hugo.martin.duloz@gmail.com'}>Contact me</Button>
                    <span className={`self-end font-semibold justify-self`}>Hugo Martin</span>
                </div>

            </Card>
        </main>
    )
}

export default WorkInProgress
