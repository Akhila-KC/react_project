import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact_banner from '../components/Contact_banner'
import Contact_Details from '../components/Contact_Details'
import Contact_map from '../components/Contact_map'

function contact(){
    return(
        <div>
            <Nav/>
            <Contact_banner/>
            <Contact_Details/>
            <Contact_map/>
            <Footer/>
            
        </div>
    )
}
export default contact;