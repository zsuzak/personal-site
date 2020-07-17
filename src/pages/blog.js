import React from "react"
import { Link, graphql } from "gatsby"

import Toolbar from '../components/Navigation/Toolbar/Toolbar'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
        <div>
          <Toolbar />
          <Layout location={this.props.location} title={siteTitle}>
            <SEO title="All posts" />
            <div style={{ margin: "20px 0 40px" }}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4)
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none`,
                        color: `#8d0018`,
                        fontFamily: `Arial Black`,
                        textTransform: `uppercase`,
                        fontWeight: `bold` }}
                        to={`/blog${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p 
                      style={{fontFamily: `Georgia`}}
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </Layout>
        </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
