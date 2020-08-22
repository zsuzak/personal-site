import React from "react"
import { graphql } from "gatsby"

import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import Aux from '../hoc/Aux/Aux'
import Post from '../components/Post/Post'
import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
        <Aux>
          <Toolbar />
          <Layout location={this.props.location} title={siteTitle}>
            <SEO title="All posts" />
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Post 
                    title={title} 
                    key={node.id}
                    desc={node.frontmatter.description || node.excerpt} 
                    link={`/blog${node.fields.slug}`} 
                    date={node.frontmatter.date} 
                    time={node.timeToRead}
                    source={node.fields.slug}/>
                )
              })}
          </Layout>
        </Aux>
    )
  }
}

export default Blog

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        timeToRead
        id
      }
    }
  }
}
`
