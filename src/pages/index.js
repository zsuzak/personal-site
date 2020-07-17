import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Button from "../components/button"

import '../styles/global.css'
import Home from '../containers/Home/Home'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import Landing from '../components/Landing/Landing'

class IndexPage extends React.Component {
  render() {

    return (
      <Home>
          <Toolbar />
          <Landing />    
      </Home>
    )
  }
}

export default IndexPage
