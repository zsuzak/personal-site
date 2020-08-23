import React from "react"

import SEO from "../components/seo"
import '../styles/global.css'
import Home from '../containers/Home/Home'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import Landing from '../components/Landing/Landing'

class IndexPage extends React.Component {
  render() {
    return (
      <Home>
          <SEO title="Home" />
          <Toolbar />
          <Landing />    
      </Home>
    )
  }
}

export default IndexPage
