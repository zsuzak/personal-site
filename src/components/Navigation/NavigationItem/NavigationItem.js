import React from 'react'
import { Link } from "gatsby"

import { motion } from 'framer-motion'
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    // TODO: FIX INLINE-STYLE
    <li className={classes.NavigationItem} style={{marginBottom: 0}}> 
        <motion.div whileHover={{ translateY: -3 }}>
            <Link activeClassName="active" to={props.link}>{props.children}</Link>
        </motion.div>
    </li>
);

export default navigationItem