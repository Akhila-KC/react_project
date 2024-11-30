import bg1 from './images/image1.jpg';
import bg2 from './images/image2.jpg'; 
import bg3 from './images/image3.jpg';
import './Home_slide.css';
import {motion} from 'framer-motion';

function Home_slide() {
    return (
    
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      
            
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bg3} class="w-100" alt="Slide 1"/>
                <motion.div className="carousel-caption"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                  <h3 className='head'>“A restaurant is a fantasy—a kind of living fantasy in which diners are the most important members of the cast.”</h3>
                </motion.div>
              </div>
              <div className="carousel-item">
                <img src={bg2} class="w-100" alt="Slide 2"/>
                <motion.div className="carousel-caption"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                  <h3 className='head'>“Eating is a necessity, but cooking is an art.”</h3>
                </motion.div>
              </div>
              <div className="carousel-item">
                <img src={bg1} class="w-100" alt="Slide 3"/>
                <motion.div className="carousel-caption"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                  <h3 className='head'>“There is no love sincerer than the love of food.”</h3>
                </motion.div>
              </div>
            </div>
            
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    
    );
  }
  
export default Home_slide;