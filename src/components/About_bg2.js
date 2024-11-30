import res_img from './images/restaurant1.jpg'
import {motion} from 'framer-motion';
import { Button } from './Button.styles';

import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function About_bg2(){
  useEffect(() => {
    AOS.init();
  }, [])
const obj={
    backgroundColor:"#d5d6d5",
}
    return(
        <div className="container"><br/><br/><br/>
          <div className="row" style={{textAlign: "center"}}>
              <motion.div className="col-lg-7">
                <h2 className='head topmargin'>ABOUT US</h2><br/><br/>
                <div data-aos="fade-up-left">
                <p className='welcome'>
                
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                </p><br/><br/>
                </div>
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Button>Know more</Button>
                </motion.div>
                
              </motion.div>
            <div className="col-lg-5">
              <motion.div className="zoom about_margin"
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:2}}
              viewport={{once:true}}>
                <img className='serve' src={res_img} alt="image_error" height="300px" width="500px"/>
              </motion.div>
            </div>
          </div>
        </div>
    );
}

export default About_bg2;