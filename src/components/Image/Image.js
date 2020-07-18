import React from 'react'

import classes from './Image.module.css'

const image = (props) => {
    return (
        <div className={classes.Image}>
            <img onClick={props.clicked} key={props.dateTaken} src={props.source} alt="Missing entry."/>
            <p>{(props.dateTaken).substring(0,10)}</p>
        </div>
    )
}

export default image