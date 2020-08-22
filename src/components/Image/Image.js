import React from 'react'

import classes from './Image.module.css'

const image = (props) => {
    return (
        <div className={classes.Image} onClick={props.clicked} key={props.id}>
            <img className={classes.temp} src={props.source} alt=""/>
            <div className={classes.date}>
                <p>{(props.dateTaken).substring(0,10)}</p>
            </div>
        </div>
    )
}

export default image