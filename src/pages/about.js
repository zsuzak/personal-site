import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Button from "../components/button"

import '../styles/global.css'
import Home from '../containers/Home/Home'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import About from '../components/Text/About/About'

class AboutPage extends React.Component {
  render() {

    return (
      <Home>
          <Toolbar />
          <About />
      </Home>
    )
  }
}

export default AboutPage
