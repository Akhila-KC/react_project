import Chef1 from './images/chef1.png'
import Chef2 from './images/chef2.webp'
import Chef3 from './images/chef3.png'
import Chef4 from './images/chef4.png'
import './Chef.css'
import { Button } from './Button.styles';
import {motion} from 'framer-motion';

function Chef() {
    const obj={
        backgroundColor:"rgb(251, 227, 122)",
    }
    return (
    
    <motion.div className="container-fluid"
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:2}}
            viewport={{once:true}}>
        <div className="row">
            
            <h3 className='head topmargin'>Our Master Chefs</h3> <br/>
            <div className="col-lg-3">
                <motion.div className="card zoom"
                style={obj}
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <img alt='img_error' src={Chef1} className="card-img-top rounded-circle mx-auto d-block image topmargin"/>
                </motion.div>
                <motion.div className="card-body welcome"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <center>
                        <h5 className="card-title">MARTIN</h5>
                    </center><br/>
                    <p className="card-text">Most famous chef in the world. The ultra-famous and TV personality is well-known celebrity chef.</p><br/>
                </motion.div>
                <motion.div className="card-footer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}><br/>
                    <center>
                    <Button>View Profile</Button>
                    </center>
                </motion.div>
            </div>
            <div className="col-lg-3 topmargin">
                <motion.div className="card zoom"
                style={obj}
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <img alt='img_error' src={Chef2} className="card-img-top rounded-circle mx-auto d-block image"/>
                </motion.div>
                <motion.div className="card-body welcome"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <center>
                        <h5 className="card-title">SANJEEV KAPOOR</h5>
                    </center><br/>
                    <p className="card-text">Most famous chef in the world. The ultra-famous and TV personality is well-known celebrity chef.</p><br/>
                </motion.div>
                <motion.div className="card-footer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}><br/>
                    <center>
                    <Button>View Profile</Button>
                    </center>
                </motion.div>
            </div>
            <div className="col-lg-3 topmargin">
                <motion.div class="card zoom"
                style={obj}
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <img alt='img_error' src={Chef3} className="card-img-top rounded-circle mx-auto d-block image"/>
                </motion.div>
                <motion.div className="card-body welcome"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <center>
                        <h5 className="card-title">VINAY KUMAR</h5>
                    </center><br/>
                    <p className="card-text">Most famous chef in the world. The ultra-famous and TV personality is well-known celebrity chef.</p><br/>
                </motion.div>
                <motion.div className="card-footer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}><br/>
                    <center>
                    <Button>View Profile</Button>
                    </center>
                </motion.div>
            </div>
            <div className="col-lg-3 topmargin">
                <motion.div className="card zoom"
                style={obj}
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <img alt='img_error' src={Chef4} className="card-img-top rounded-circle mx-auto d-block image"/>
                </motion.div>
                <motion.div className="card-body welcome"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <center>
                        <h5 className="card-title">RAVINDER BOGAL</h5>
                    </center><br/>
                    <p className="card-text">Most famous chef in the world. The ultra-famous and TV personality is well-known celebrity chef.</p><br/>
                </motion.div>
                <motion.div className="card-footer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}><br/>
                    <center>
                    <Button>View Profile</Button>
                    </center><br/>
                </motion.div>
            </div>
        </div>
    </motion.div>

    
    );
  }
  
export default Chef;