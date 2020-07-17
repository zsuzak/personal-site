import React from 'react'
import { Link } from "gatsby"

import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    // TODO: FIX INLINE-STYLE
    <li className={classes.NavigationItem} style={{marginBottom: 0}}> 
        <Link activeClassName="active" to={props.link}>{props.children}</Link>
    </li>
);

export default navigationItem