import React from 'react'
import styles from '../styles/WorkInProgress.module.css'
import {motion } from "framer-motion";

const titleVariants = {
    "hidden": {
        opacity: 0,
        y: -50
    },
    "show": {
        opacity: 1,
        y: 0
    }
}

const subtitleVariants = {
    "hidden": {
        opacity: 0,
    },
    "show": {
        opacity: 1
    }
}

const coverVariants = {
    "hidden": {
        width: "0%",
        left: "50%",
        right: "50%",
        
    },
    "show": {
        width: "100%",
        left: 0,
        right: 0,
    }
}

const boxVariants = {
    "start": {
        y: 25
    },
    "end": {
        y: -25
    }
}

const WorkInProgress = () => {
    return (
        <main className={styles.page}>
            <div className={styles.hero}>
                <motion.h1 variants={titleVariants} initial="hidden" animate="show" >Hugo Martin</motion.h1>
                <motion.h2 variants={subtitleVariants} initial="hidden" animate="show" transition={{delay: .3}}>Web Developer</motion.h2>
                <motion.div className={styles.sideRevealBox} variants={boxVariants} initial="start" animate="end" transition={{repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1}}>
                    <motion.div className={styles.sideRevealCover} variants={coverVariants} initial="show" animate="hidden" transition={{delay: .6, duration: 1}}/>
                    <h3>Work In Progress</h3>
                </motion.div>
            </div>
        </main>
    )
}

export default WorkInProgress
