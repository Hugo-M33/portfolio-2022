import React from 'react'
import { Transition } from '@headlessui/react'
import {scroller} from "react-scroll"


const MaintenanceCard: React.FC<{}> = () => {
    const scrOpts = {smooth: "easeOutQuint", duration:100}
    return (
        <Transition
        appear={true}
        show={true}
        enter="transition duration-1500 delay-1000 ease-out"
        enterFrom="transform translate-y-0 -translate-x-1/2 drop-shadow-sm scale-0.5 opacity-0"
        enterTo="transform -translate-y-1/2 -translate-x-1/2 drop-shadow-2xl scale-1 opacity-1"
        entered="transform -translate-y-1/2 -translate-x-1/2 drop-shadow-2xl scale-1 opacity-1"
        className={`grid place-items-center bg-sky-50 h-64 w-3/4 lg:w-1/2 rounded-lg border border-gray-800 border-opacity-50 absolute bottom-24 left-1/2 transform `}>
            
            <div className="w-3/4 h-3/4 grid place-items-center">
                <h3 className="font-bold text-2xl text-center select-none">This site is still under construction 🏗️</h3>
                
            </div>
        </Transition>
    )
}

interface PillButtonProps {
    children?: String,
    onClick?: () => void
}

const PillButton: React.FC<PillButtonProps> = ({children, onClick}) => {
    return (
        <Transition as="button" type="button" className="select-none bg-emerald-700 h-min py-3 px-8 rounded-full text-white font-bold hover:shadow-lg transition-shadow duration-500" onClick={onClick}>
            {children}
        </Transition>
    )
}

export default MaintenanceCard
