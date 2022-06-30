import {NextPage} from "next";
import {ReactNode} from "react";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"

interface Props {
    as?: TypographyElement
    children: ReactNode,
    className?: string,
}

const styles: Record<TypographyElement, string> = {
    "h1": "text-6xl md:text-8xl",
    "h2": "",
    "h3": "",
    "h4": "",
    "h5": "",
    "h6": "",
    "p": "text-lg md:text-xl",
}

const Typography: NextPage<Props> = ({as, children, className}) => {
    const Component = as ?? "p"
    return (
        <Component className={`${styles[Component]} ${className}`}>{children}</Component>
    )
}

export default Typography