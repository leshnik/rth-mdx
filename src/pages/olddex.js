import React from "react"
import { Container, FeatureImage, Content, ContentCard } from '../components'

const IndexPage = () => {
  return (
    <Container>
        <FeatureImage />
        <Content>
          <ContentCard
            date="August 1, 2020" 
            title="Typical title words" 
            excerpt="Typical content will go here" 
            slug="/test" />
        </Content>
    </Container>
  )
}
export default IndexPage