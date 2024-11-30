import './About_bg.css'
import {motion} from 'framer-motion';

import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function About_bg(){
    useEffect(() => {
        AOS.init();
      }, [])
    const obj={
        backgroundColor:"#d5d6d5",
    }

    return(
    <motion.div className="container-fluid bg_image"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div data-aos="fade-up-left">
                <h1 className='head' style={{textAlign: "center", fontFamily: "cursive"}}>"The Great Times You Can Have With Great Food"</h1><br/><br/><br/>
            </div>
            <div data-aos="fade-up-left">
                <h1 className='head' style={{textAlign: "center", fontFamily: "cursive"}}>"Enjoy Taste Of Heaven"</h1><br/><br/><br/>
            </div>
            
    </motion.div>

    


    );
}

export default About_bg;