import food1 from './images/food1.jpg'
import food2 from './images/food2.jpg'
import food3 from './images/food3.jpg'
import food4 from './images/food4.jpg'
import food5 from './images/food5.jpg'
import food6 from './images/food6.jpg'
import food7 from './images/food7.jpg'
import food8 from './images/food8.jpg'
import './Home_food_image.css'
import {motion} from 'framer-motion';

function Home_food_image() {
    return (
        <motion.div className="container"
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:2}}
            viewport={{once:true}}><br/><br/><br/>
                <div className="row">
                    <div className="col-lg-3">
                        <motion.div class="zoom"
                        initial={{opacity:0,scale:0}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{duration:2}}
                        viewport={{once:true}}>
                            <img alt='error' src={food1} className="bottommargin foodimage img-fluid mx-auto d-block"/>
                        </motion.div>
                    </div>
                    <div class="col-lg-3">
                        <motion.div class="zoom"
                        initial={{opacity:0,scale:0}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{duration:2}}
                        viewport={{once:true}}>
                            <img alt='error' src={food2} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                        </motion.div>
                    </div>
                    <div class="col-lg-3">
                        <motion.div class="zoom"
                        initial={{opacity:0,scale:0}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{duration:2}}
                        viewport={{once:true}}>
                            <img alt='error' src={food3} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                        </motion.div>
                    </div>
                    <div class="col-lg-3">
                        <motion.div class="zoom"
                        initial={{opacity:0,scale:0}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{duration:2}}
                        viewport={{once:true}}>
                            <img alt='error' src={food4} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                        </motion.div>
                    </div>
                </div>
                

            

            <div className="row">
                <div className="col-lg-3">
                    <motion.div className="zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={food5} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                    </motion.div>
                </div>
                <div className="col-lg-3">
                    <motion.div className="zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={food6} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                    </motion.div>
                </div>
                <div className="col-lg-3">
                    <motion.div className="zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={food7} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                    </motion.div>
                </div>
                <div class="col-lg-3">
                    <motion.div className="zoom"
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}>
                        <img alt='error' src={food8} className="foodimage img-fluid mx-auto d-block bottommargin"/>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    );
  }
  
  export default Home_food_image;