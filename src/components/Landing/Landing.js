import React from 'react'
import { motion } from "framer-motion"

import classes from './Landing.module.css'

const landing = () => (
    <div className={classes.Landing}>
        <motion.div animate={{ scale: 1.1 }} transition={{ duration: 2 }}>
            <h1>Zakariyya Uddin</h1>
            <h3>aspiring software engineer</h3>
        </motion.div>
    </div>
)

export default landing