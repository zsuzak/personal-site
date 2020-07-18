import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Button from "../components/button"

import Aux from '../hoc/Aux/Aux'
import '../styles/global.css'
import Gallery from '../containers/Gallery/Gallery'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'

class PhotographyPage extends React.Component {
  render() {

    return (
      <Aux>
          <Toolbar />
          <Gallery />    
      </Aux>
    )
  }
}

export default PhotographyPage