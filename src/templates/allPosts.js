import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, ContentCard, FeatureImage, Pagination } from '../components'
import { H1, P } from '../elements'


const allPosts = ({ pageContext, data }) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage -1 === 1 ? "/" : `/${currentPage -1}`
    const nextPage = `/${currentPage +1}`
    const posts = data.allMdx.edges

    return (
        <Container>
            <FeatureImage />
            <Content>
                <H1 text-align="center" margin="0 0 1rem 0">
                    Real Title would go here
                </H1>
                <P color="dark2" textAlign="center">
                    This where the Lorem Ipsum would go if I had any at hand. I will keep typing gibberish to complete the page's source text although I'm not sure that that is what this template is supposed to do. I rather though that it should be taking its text from a graphql query about what's in the **posts** folder. So is this text going to appear on any page? or all pages?
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}
export default allPosts
export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: $limit, skip: $skip) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "DD MMMM, YYYY")
                  excerpt
                  slug
                  title
                }
              }
            }
          }
    }
`