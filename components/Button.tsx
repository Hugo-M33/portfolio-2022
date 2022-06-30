import React, {FunctionComponent, ReactNode} from "react";

type AllowedComponents = 'a' | 'button'

interface Props {
    children: ReactNode,
    className?: string,
    rounded?: boolean,
    as?: AllowedComponents,
    href?: string,
    variant?: "light" | "dark"
}

const styles = {
    common: `font-bold shadow-2xl cursor-pointer hover:scale-105 transition-transform ease-out inline-block p-4`,
    dark: `bg-dark-shades text-light-shades`,
    light: `bg-light-shades text-dark-shades`
}

const Button: FunctionComponent<Props> = ({children, variant, className, rounded, as, href}) => {
    const Component = as || 'button'
    if (!variant) variant = 'dark'
    return (
        <Component href={href} className={`${styles.common} ${styles[variant]} ${rounded ? 'rounded-2xl' : ''} ${className}`}>
            {children}
        </Component>
    )
}

Button.defaultProps = {
    className: '',
    rounded: false,
    variant: "dark"
}

export default Button