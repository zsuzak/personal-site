import React from "react"

import SEO from "../components/seo"
import '../styles/global.css'
import Home from '../containers/Home/Home'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import About from '../components/About/About'

class AboutPage extends React.Component {
  render() {

    return (
      <Home>
          <SEO title="About" />
          <Toolbar />
          <About />
      </Home>
    )
  }
}

export default AboutPage
