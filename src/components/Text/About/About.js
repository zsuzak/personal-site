import React from 'react'

import {SocialMediaIconsReact} from 'social-media-icons-react'
import classes from './About.module.css'

const about = () => (
    <div className={classes.About}>
        <h1>Hi, I'm Zak</h1>
        
        <div className={classes.fill}></div>

        <h2>Computer Science (with Year in Industry) graduate from the University of Birmingham.</h2>

        <div className={classes.fill}></div>

        <p>
            Aspiring software engineer, experienced in Node.js, SQL & MongoDB. <br/>
            Currently learning React.js & GraphQL, developing this site whilst getting to grips with these technologies.
        </p>

        <div className={classes.fill}></div>

        <p>
            Also an average football fan eager to grow my knowledge in the beautiful game, blogging along the way.
        </p>

        <div className={classes.fill}></div>
        
        <div className={classes.links}>
            <SocialMediaIconsReact size={"44px"} backgroundColor="#333333" icon="instagram" url="https://www.instagram.com/zakzsu"/>
            <SocialMediaIconsReact size={"44px"} backgroundColor="#333333" icon="github" url="https://www.github.com/zsuzak"/>
            <SocialMediaIconsReact size={"44px"} backgroundColor="#333333" icon="mail" url="mailto:zakariyya.s.uddin@gmail.com"/>
        </div>

    </div>
)

export default about