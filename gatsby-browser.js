import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body, html {
        font-family: ${props => props.theme.fonts.art};
        height: 100%;
        background-color: ${props => props.theme.colors.light2};
        color: ${props => props.theme.colors.spectacle}
    }
    p {
        font-family: ${props => props.theme.fonts.main};
        color: ${props => props.theme.colors.domicile};
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)