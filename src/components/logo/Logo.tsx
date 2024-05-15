import React, {FC} from 'react';
import logo from '../assets/images/logo.svg'

type LogoPropsType = {
    width?: string
    height?: string
    className?: string
}

export const Logo: FC<LogoPropsType> = ({width, height, className}) => {
    return (
        <a href='#'>
            <img src={logo} alt={'logo'} width={width} height={height} className={className}/>
        </a>
    );
};