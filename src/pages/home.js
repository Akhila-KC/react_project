import Nav from '../components/Nav'
import Slide from '../components/Home_slide'
import Welcome from '../components/Home_welcome'
import Food_image from '../components/Home_food_image'
import Our_service from '../components/Home_our_service'
import Chef from '../components/Chef'
import Booktable from '../components/Home_booktable'
import Footer from '../components/Footer'


function home(){
    return(
        <div>
            <Nav />
            <Slide />
            <Welcome />
            <Food_image/>
            <Our_service/>
            <Chef/>
            <Booktable/>
            <Footer/>
            
        </div>
    )
}
export default home;