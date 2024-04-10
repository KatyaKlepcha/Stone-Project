import React, {FC} from 'react';
import logo from '../assets/images/logo.svg'

type LogoPropsType = {
    width?: string
    height?: string
}

export const Logo: FC<LogoPropsType> = ({width, height}) => {
    return (
        <a href='#'>
            <img src={logo} alt={'logo'} width={width} height={height}/>
        </a>
    );
};