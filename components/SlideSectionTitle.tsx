import React from 'react'
import {Transition} from "@headlessui/react"
import {InView} from "react-intersection-observer";

interface TitleProps {
    right?: boolean,
}

const SlideSectionTitle: React.FC<TitleProps> = ({right, children}) => {
  return (
    <InView threshold={0.5}>
    {({ inView, ref, entry }) => (
        <div ref={ref} className={`absolute top-0 h-20 text-3xl w-screen h-fit flex items-end py-4 px-4 ${right && "justify-end"}`}>
                <Transition
                    ref={ref}
                    as="h2"
                    className="font-bold text-3xl text-white"
                    appear={true}
                    show={inView}
                    enter="transition duration-500 delay-300 ease-out"
                    leave="transition duration-500 delay-300 ease-out"
                    enterFrom={`transform ${right ? "" : "-"}translate-x-full opacity-0`}
                    enterTo="transform  translate-x-0 opacity-100"
                    entered="transform translate-x-0 opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">{children}
                    </Transition>
        </div>
    )
    }
</InView>
  )
};

export default SlideSectionTitle;
