import React from 'react'
import { ContainerWrapper } from '../elements'
import { Nav } from "../components"
//import SvgComponent from '../images/rthHero28july'

export const Container = ({children}) => {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
        </ContainerWrapper>
    )
}