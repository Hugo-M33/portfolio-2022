import React, {FunctionComponent, LinkHTMLAttributes, ReactNode} from "react";

type AllowedComponents = 'a' | 'button'

interface Props {
    children: ReactNode,
    className?: string,
    rounded?: boolean,
    as?: AllowedComponents,
    href?: string,
}

const styles = {
    common: `font-bold shadow-2xl cursor-pointer hover:scale-105 transition-transform ease-out`,
    dark: `bg-dark text-light p-4`
}

const Button: FunctionComponent<Props> = ({children, className, rounded, as, href}) => {
    const Component = as || 'button'
    return (
        <Component href={href} className={`${styles.common} ${styles.dark} ${rounded ? 'rounded-2xl' : ''} ${className}`}>
            {children}
        </Component>
    )
}

Button.defaultProps = {
    className: '',
    rounded: false,
}

export default Button