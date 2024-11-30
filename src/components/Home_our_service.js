import './Home_our_service.css'
import Chefs from './images/our_service1.png'
import Food from './images/our_service2.png'
import Quality from './images/our_services3.png'
import Service from './images/our_service4.png'
import {motion} from 'framer-motion';

function Home_our_service() {
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
                <center><h3 className="head topmargin">OUR SERVICES</h3></center> <br/><br/>
                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    style={obj} 
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <center><img alt='img_error' src={Chefs} className="card-img-top image_service topmargin"/></center>
                    </motion.div>
                    <div className="card-body welcome">
                        <center>
                            <h5 class="card-title">MASTER CHEFS</h5>
                        </center><br/>
                        <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita ameta diam</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    style={obj}
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <center><img alt='img_error' src={Food} className="card-img-top image_service topmargin"/></center>
                    </motion.div>
                    <div className="card-body welcome">
                        <center>
                         <h5 className="card-title">QUALITY FOOD</h5>
                        </center><br/>
                        <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita ameta diam</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <motion.div className="card zoom"
                    style={obj}
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <center><img alt='img_error' src={Quality} className="card-img-top image_service topmargin"/></center>
                    </motion.div>
                    <div className="card-body welcome">
                        <center>
                            <h5 className="card-title">ONLINE ORDER</h5>
                        </center><br/>
                        <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita ameta diam</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <motion.div class="card zoom"
                    style={obj}
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <center><img alt='img_error' src={Service} className="card-img-top image_service topmargin"/></center>
                    </motion.div>
                    <div className="card-body welcome">
                        <center>
                            <h5 className="card-title">24/7 SERVICES</h5>
                        </center><br/>
                        <p className="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita ameta diam</p>
                    </div>
                </div>
            </div>
    
        </motion.div>
    
    
    );
  }
  
export default Home_our_service;