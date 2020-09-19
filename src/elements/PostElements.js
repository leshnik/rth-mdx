import Styled from 'styled-components'

export const PostWrapper = Styled.main`
    grid-column: 4 / span 8;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacings.xlarge} ${props.theme.spacings.xxlarge}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    };
    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }

`