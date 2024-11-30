import React from 'react'
import './Menu_trynew.css'
import {motion} from 'framer-motion';

export default function Menu_trynew() {
  return (
    <motion.div
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
        <div className="container-fluid trynew head"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>"Wanna Try Something New Today"</h1><br/><br/><br/>
            <h1>"Go through it!!!"</h1><br/><br/><br/>
        </div>
    </motion.div>
  )
}

