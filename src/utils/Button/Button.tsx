import * as React from 'react';


type ButtonProps = {
    type?: any,
    variant: string,
    onClick: (e: React.MouseEvent | React.KeyboardEvent) => void
}

const Button: React.FC<ButtonProps> = ({variant, type, onClick, children}) => {

    return (
        <>
            <button className={`snksButton ${variant}`} type={type} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export {Button};