import serve from './images/serve.jpeg'
import './Home_welcome.css'
import { Button } from './Button.styles';
import {motion} from 'framer-motion';

import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home_welcome() {
    useEffect(() => {
        AOS.init();
      }, [])
    const obj={
        backgroundColor:"rgb(251, 227, 122)",
    }
    return (
    <div className='container' style={obj}>
    <div className="container-fluid">
        <div className="row">
            <motion.div className="col-lg-5"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <img src={serve} alt="img_error" className='serve topmargin mx-auto d-block img-fluid'/>
            </motion.div>
            <div className="col-lg-7 head"><br/><br/>
                <h4>WELCOME TO RESTAURANT</h4><br/>
                
                <div className='welcome' data-aos="fade-up-left">
                <p style={{color:"black"}}>A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
                Early eating establishments recognizable as restaurants in the modern sense emerged in Song dynasty China during the 11th and 12th centuries. In large cities, such as Kaifeng and Hangzhou, food catering establishments catered to merchants who travelled between cities. Probably growing out of tea houses and taverns which catered to travellers, Kaifeng's restaurants blossomed into an industry that catered to locals as well as people from other regions of China.</p><br/><br/><br/> 
                </div>
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Button>Read more</Button>
                </motion.div>
            </div>
        </div>
        
    </div>
    </div>
    );
  }
  
  export default Home_welcome;