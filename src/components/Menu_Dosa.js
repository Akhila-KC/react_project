import React from 'react'
import './Menu_Dosa.css'
import Dosa1 from './images/gheedosa.jpg'
import Dosa2 from './images/Masala-Dosa.jpg'
import Dosa3 from './images/onion_dosa.webp'
import Dosa4 from './images/gothamb_dosa.jpg'
import {motion} from 'framer-motion'
import { Button } from './Button.styles'


export default function Menu_Dosa() {
  return (

    <motion.div className="container topmargin mx-auto d-block"
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:2}}
            viewport={{once:true}}>
        <h3 className="head topmargin bottommargin">DOSA VARIETIES</h3>
            <div className="row bottommargin">
                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                            <img alt='error' src={Dosa1} class="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Ghee Roast</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                    <motion.div className="card-footer mx-auto d-block topmargin"
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
                        <img alt='error' src={Dosa2} className="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Masala Dosa</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <motion.div class="card-footer mx-auto d-block bottommargin topmargin"
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
                        <img alt='error' src={Dosa3} className="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Onion Dosa</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <motion.div className="card-footer mx-auto d-block bottommargin topmargin"
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
                        <img alt='error' src={Dosa4} className="menu_image card-img-top img-fluid mx-auto d-block"/>
                    </motion.div>
                    <div class="card-body">
                        <center>
                            <h5 className="card-title">Gothamb Dosa</h5>
                        </center>
                            <p className="card-text">It is a long  that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <motion.div className="card-footer mx-auto d-block bottommargin topmargin"
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
