/* eslint-disable prettier/prettier */
import { Theme as MuiTheme } from '@mui/material/styles'

declare global {
    type ReactNode =
        | React.ReactElement<unknown>
        | FunctionComponent<unknown>
        | React.ComponentClass<unknown>
        | null

    interface IBase extends Record<string, unkonwn> {
        id: string
    }

    interface IUser extends Record<string, unknown> {
        id: string
        name: string
        email: string
        role: string
        createdAt: string
        profileImageURL: string
    }
}

declare module '@mui/material/styles/createPalette' {
    type colorNumber = {
        [number]: string
    }
    export interface PaletteOptions {
        neutral: PaletteColor | colorNumber
    }
    export interface Palette {
        neutral: PaletteColor | colorNumber
    }
}

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        gradientPrimary: true
        basic: true
    }
}
