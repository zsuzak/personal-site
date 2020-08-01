import React from 'react'
import { Link } from "gatsby"

import classes from './Post.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// TODO: DYNAMIC POST IMAGES

const Post = (props) => {
    return (
        <Link to={props.link}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={"https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2683&q=80"}
                    title="Temp static"
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="small">
                            {props.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>

    )
}

export default Post