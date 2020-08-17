import React from 'react'
import { motion } from "framer-motion"

import classes from './Landing.module.css'

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: -10 }
}

const landing = () => (
    <div className={classes.Landing}>
        <motion.div transition={{ ease: "easeOut", duration: 2 }} initial="hidden" animate="visible" variants={variants} >
            <h1>Zakariyya Uddin</h1>
            <h3>aspiring software engineer</h3>
        </motion.div>
    </div>
)

export default landing