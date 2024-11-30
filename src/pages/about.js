import Nav from '../components/Nav'
import Footer from '../components/Footer'
import About_bg from '../components/About_bg'
import About_bg2 from '../components/About_bg2'
import Chef from '../components/Chef'
function about(){
    return(
        <div>
            <Nav />
            <About_bg/>
            <About_bg2/>
            <Chef/>
            <Footer/>
        </div>
    )
}
export default about;