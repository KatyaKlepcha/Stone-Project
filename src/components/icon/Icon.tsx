import React, {FC} from 'react';
import iconsSprite from '../assets/images/icons-sprite.svg'

export type IconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    className?: string
    fill?: string
}

export const Icon: FC<IconProps> = ({iconId, width, height, viewBox, className, fill}) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} className={className} fill={fill || "none"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
        </svg>
    );
};