import React from "react"
import { graphql } from "gatsby"

import Aux from '../hoc/Aux/Aux'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Layout location={this.props.location}>
          <SEO title="404: Not Found" />
          <h1 style={{color: `#8d0018`, fontFamily: `Arial Black`, textTransform: `uppercase`}}>
            404 Not Found
          </h1>
          <p>Page not found</p>
        </Layout>
      </Aux>
      
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
