import {theme} from "./Theme.styled";

type FontPropsType = {
    color?: string
    weight?: number
    lineHeight?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({weight, lineHeight, color, Fmin, Fmax}: FontPropsType) => `
  font-weight: ${weight || 400};
  line-height: ${lineHeight || 1.2};
  color: ${color || theme.colors.font};
  font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

