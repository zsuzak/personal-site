import React from 'react'
import { Link } from "gatsby"

import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.imageData} >
                <div className={classes.backgroundImage} style={{backgroundImage: `url(../../${props.source.substring(1,props.source.length-1)}.jpg)`}}></div>
                <div className={classes.publicationDetails}>
                    <span>{props.date}</span>
                    <span>{props.time} {props.time === 1 ? 'minute' : 'minutes'} read</span>
                </div>
            </div>

            <div className={classes.postData}>
                <Link to={props.link}>
                    <h2 className={classes.title}>{props.title}</h2>
                    <p className={classes.description}>{props.desc}</p>
                    <div className={classes.readMore}>
                        <p>Read more &rarr;</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Post