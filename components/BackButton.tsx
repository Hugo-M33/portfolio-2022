import {useRouter} from "next/router"
import {MouseEvent} from "react"
import styles from "../styles/SmallComponents.module.scss"

interface ButtonProps {
    additionalClasses?: String
}


const BackButton: React.FC<ButtonProps> = ({additionalClasses}) => {
    const router = useRouter();
    const handleBack = (e: MouseEvent) => {
        e.preventDefault();
        router.back();
    }
    return (
        <button className={`rounded-lg text-white bg-slate-800 hover:bg-slate-900 shadow-md hover:shadow-xl w-fit h-fit p-4 ${additionalClasses}`} type="button" onClick={handleBack}>Back</button>
    )
}

export default BackButton