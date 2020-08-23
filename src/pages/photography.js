import React from "react"

import SEO from "../components/seo"
import Aux from '../hoc/Aux/Aux'
import '../styles/global.css'
import Gallery from '../containers/Gallery/Gallery'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'

class PhotographyPage extends React.Component {
  render() {

    return (
      <Aux>
          <SEO title="Photography" />
          <Toolbar />
          <Gallery />    
      </Aux>
    )
  }
}

export default PhotographyPage