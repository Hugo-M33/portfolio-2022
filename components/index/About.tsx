import { Transition } from '@headlessui/react'
import React from 'react'
import {InView} from 'react-intersection-observer'
import SlideSectionTitle from "../SlideSectionTitle"

const CATEGORIES = [
    {emoji: '👦🏻', text: 'Début'},
    {emoji: '🏫', text: 'Lycée'},
    {emoji: '🎓', text: 'DUT'}
]

const About: React.FC = () => {
    return (
        <section className="bg-gray-700 h-screen w-screen snap-start grid place-items-center relative" id="about">
            <SlideSectionTitle right>About</SlideSectionTitle>
            <div className="bg-gray-900 rounded-lg w-3/4 h-3/4 text-white flex flex-col px-8 shadow-lg">

                <div className="w-full flex flex-col divide-y divide-slate-700">
                    {CATEGORIES.map(e => <AboutCategory config={e} key={`about_${e.text}`}/> )}
                </div>
            </div>
        </section>
    )
}

interface AboutCatProps {
    config?: {
        emoji?: String,
        text?: String
    }
}

const AboutCategory: React.FC<AboutCatProps> = ({config}) => {
    return (
        <div className="h-16 w-full mx-auto flex items-center justify-between group cursor-pointer">
            <span className="inline-grid place-items-center w-16 h-full text-2xl" role="img" aria-label="boy">{config?.emoji ?? "🔵"}</span>
            <h3 className="font-bold">{config?.text ?? "<NO TEXT>"}</h3>
            <span className="inline-grid place-items-center w-16 h-full text-2xl transition-transform duration-400 ease-out group-hover:translate-x-3" role="img" aria-label="boy">⇢</span>
        </div>
    )
}


export default About
