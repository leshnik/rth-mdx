import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = Styled(props => <Link {...props} />)`
    padding: 0.5rem 0.75rem;
    background-color: ${props => props.theme.colors.main1};
    border-radius: 0.5rem;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    width: fit-content;
    transition: filter 0.3s ease;
    text-decoration: none;
    &:hover, &:focus {
        filter: brightness(110%);
    }; 

`
