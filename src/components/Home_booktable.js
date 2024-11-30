import Table from './images/table_image.jpg'
import { Button } from './Button.styles'
import {motion} from 'framer-motion'

export default function Home_booktable() {
  return (
    <div className='container'>
        <div className="container-fluid">
            <div className="row text-center">
                <motion.div className="col-lg-6"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <img className='serve img-fluid topmargin' src={Table} alt="img_error" width="80%" height='400px'/>
                </motion.div>

                <motion.div className="col-lg-6"
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:2}}
                viewport={{once:true}}>
                    <div className="container">
                        <h2 className="head topmargin">Book Your Seats!!!</h2>
                        <form action="">
                            <div className="form-group topmargin">
                                <label for="Name">Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" className="form-control" id="Email" placeholder="email" name="email"/>
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
                            <Button className='mx-auto d-block'>BOOK NOW</Button>
                            </motion.div>
                        </form>
                    </div>  
                </motion.div>
            </div>
        </div>
    </div>
  )
}
