import People from './images/people.jpg'
import { Button } from './Button.styles'
import {motion} from 'framer-motion';

import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact_Details() {
    useEffect(() => {
        AOS.init();
      }, [])
    const obj={
        backgroundColor:"#d5d6d5",
    }
  return (
    <div className="container topmargin">
        <div className="row">
        <div className="col-lg-6">
              <motion.div className="zoom"
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:2}}
              viewport={{once:true}}>
                <img className='serve img-fluid mx-auto d-block topmargin' src={People} alt="image_error" height="300px" width="500px"/>
              </motion.div>
            </div>
            <div className="col-lg-6">
                
                <motion.div className="container" 
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <h2 className="head topmargin bottommargin">Enter your Details</h2>
                    <form className='welcome' action="">
                        <div className="form-group">
                            <label for="Name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
                        </div><br/>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="Email" placeholder="email" name="email"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="phone">Mobile:</label>
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="123-456-7890"/>
                        </div>
                        <br/><br/>
                        <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Button className='mx-auto d-block'>SUBMIT</Button>
                        </motion.div>
                    </form>
                </motion.div>
                
            </div>
        </div>
    </div>
  )
}

