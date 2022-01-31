import {useRouter} from "next/router"
import {MouseEvent} from "react"
import styles from "../styles/SmallComponents.module.scss"

interface ButtonProps {
    style?: {}
}


const BackButton: React.FC<ButtonProps> = ({style}) => {
    const router = useRouter();
    const handleBack = (e: MouseEvent) => {
        e.preventDefault();
        router.back();
    }
    return (
        <button className={styles.backButton} style={style} type="button" onClick={handleBack}>Back</button>
    )
}

export default BackButton