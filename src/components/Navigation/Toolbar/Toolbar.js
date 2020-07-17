import React from 'react';

import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems'

const toolbar = () => (
    <header className={classes.Toolbar}>
        <h2>Z</h2>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar