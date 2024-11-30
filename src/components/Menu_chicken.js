import React from 'react'
import Chicken1 from './images/broasted.webp'
import Chicken2 from './images/grilled.jpg'
import Chicken3 from './images/chicken65.jpg'
import Chicken4 from './images/butterchicken.jpg'
import {motion} from 'framer-motion'
import { Button } from './Button.styles'


export default function Menu_chicken() {
  return (

    <motion.div className="container mx-auto d-block"
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:2}}
            viewport={{once:true}}>
        <h3 className="head">CHICKEN VARIETIES</h3>
            <div className="row topmargin">
                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                            <img alt='error' src={Chicken1} class="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Broasted Chicken</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                    <motion.div className="card-footer mx-auto d-block topmargin bottommargin"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <center>
                        <Button>Order Now</Button>
                        </center>
                    </motion.div>
                </div>

                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={Chicken2} className="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Grilled Chicken</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <motion.div class="card-footer mx-auto d-block topmargin bottommargin"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <center>
                        <Button>Order Now</Button>
                        </center>
                    </motion.div>
                </div>


                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={Chicken3} className="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Chicken 65</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <motion.div className="card-footer mx-auto d-block topmargin bottommargin"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <center>
                        <Button>Order Now</Button>
                        </center>
                    </motion.div>
                </div>


                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={Chicken4} className="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    
                    <div class="card-body">
                        <center>
                            <h5 className="card-title">Butter Chicken</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <motion.div className="card-footer mx-auto d-block topmargin bottommargin"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <center>
                        <Button>Order Now</Button>
                        </center>
                    </motion.div>
                </div>

            </div>

    </motion.div>


    



    
  )
}