import {NextPage} from "next";
import Image from "next/image";

const HeroImage: NextPage = () => {
    return (
        <div className={`w-96 md:w-[32rem] h-96 md:h-[32rem] relative group`}>
            <div className={`w-4/6 h-4/6 bg-dark-shades rounded-full absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 group-hover:shadow-xl shadow-light-shades transition-all duration-700 group-hover:scale-105 relative p-2`}>
                <Image alt="Hugo Martin" src={"/photo-hugo.png"} layout={"responsive"} width="100%" height="100%" className={`rounded-full`}/>
            </div>
            <div className={`animate-[spin_6s_linear_infinite] origin-left w-1/2 h-1/2 bg-light-accent top-12 right-12 group-hover:top-1/4 group-hover:right-1/4 group-hover:origin-center absolute bg-opacity-75 rounded-full shadow-light-accent -shadow-xl transition-all duration-1000`}></div>
            <div className={`animate-[spin_6s_linear_infinite] origin-right w-1/2 h-1/2 bg-dark-accent left-12 bottom-12 group-hover:left-1/4 group-hover:bottom-1/4 group-hover:origin-center absolute bg-opacity-75 rounded-full shadow-dark-accent shadow-xl transition-all duration-1000`}></div>
        </div>
    )
}

export default HeroImage