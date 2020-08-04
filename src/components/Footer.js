import React from 'react'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from '../elements'
import { useStaticQuery, graphql } from 'gatsby'

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            rooster: file(relativePath: {eq: "rooster.svg"}) {
                publicURL
            }
            dog: file(relativePath: {eq: "dogBook.svg"}) {
                publicURL
            }
            diver: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `)
    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a 
                href="https://en.wikipedia.org/wiki/Rooster"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src={data.rooster.publicURL} alt="rooster logo" />
                </a>
                <a 
                href="https://en.wikipedia.org/wiki/Dog"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src={data.dog.publicURL} alt="dog logo" />
                </a>
                <a 
                href="https://en.wikipedia.org/wiki/Diver"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src={data.diver.publicURL} alt="diver logo" />
                </a>
            </FooterSocialIcons>
            <p>© 2020 rêver tout haut. All rights reserved.</p>
        </FooterSocialWrapper>
    </FooterWrapper>
}