import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
        <NavigationItem link="/blog">FOOTBALL</NavigationItem>
        <NavigationItem link="/photography">PHOTOGRAPHY</NavigationItem>
    </ul>
)

export default navigationItems