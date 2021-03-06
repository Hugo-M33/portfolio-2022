import React, {FunctionComponent, ReactNode} from "react";

interface Props {
    children: ReactNode,
    className?: string,
    variant?: 'light' | 'dark'
}

const styles = {
    common: `p-8 shadow-2xl rounded-xl hover:-translate-y-2 transition-transform ease-out cursor-pointer`,
    dark: `bg-dark-shades bg-opacity-90 text-light-shades`,
    light: `bg-light-shades text-dark-shades`,

}

const Card: FunctionComponent<Props> = ({children, className, variant}) => {
    if (!variant) variant = 'dark'
    return (
        <div className={`${styles.common} ${styles[variant]}   ${className}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    className: '',
    variant: 'dark',
}

export default Card