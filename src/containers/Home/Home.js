import React from 'react'

import classes from './Home.module.css'

const home = (props) => (
    <div className={classes.Home}>
        {props.children}
    </div>
)

export default home