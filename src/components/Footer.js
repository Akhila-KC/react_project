import './Footer.css'

function footer() {
    return (
    
        <div className="container-fluid footer text-center">
          <div className="row">
            <div className="col-lg-3 topmargin">
              <h5>RESTAURANT</h5>
              A restaurant is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. The generated Lorem Ipsum is therefore always free from repetition. <br/>
              <br/><br/>
             
            </div>

            <div className="col-lg-3 topmargin">
              <h6>QUICK LINKS</h6>
              <dl class="">
                  <dd><a className='footerlink link' href='/'>Home</a></dd>
                  <dd><a className='footerlink link' href='about'>About</a></dd>
                  <dd><a className='footerlink link' href='menu'>Menu</a></dd>
                  <dd><a className='footerlink link' href='contact'>Contact</a></dd>
                  
              </dl>
            </div>

            <div className="col-lg-3 topmargin">
              <h6>QUICK LINKS</h6>
              <dl class="list_prop">
                  <dd><a className='footerlink link'></a></dd>
                  <dd><a className='footerlink link'>Best Food Prices</a></dd>
                  <dd><a className='footerlink link'>Quick Supply</a></dd>
                  <dd><a className='footerlink link'>Quality Products</a></dd>
                  <dd><a className='footerlink link'>Online Ordering</a></dd>
              </dl>
            </div>
            <div class="col-lg-3 text-center">
                <h6 class="topmargin">CONTACT US</h6>
                Rajiv Gandhi Bypass, First floor, <br/>
                Town plasa <br/>
                Karuvambram, Manjeri, 676121 <br/><br/>
                phone:7611888444, 9749888333 <br/><br/>
                mail:frsamjri@gmail.com <br/><br/><br/>
                <i class="fa fa-facebook rounded-circle"></i>&nbsp;&nbsp;
                <i class="fa fa-instagram rounded-circle"></i>&nbsp;&nbsp;
                <i class="fa fa-youtube-play rounded-circle"></i>&nbsp;&nbsp;
                <i class="fa fa-whatsapp rounded-circle"></i>
            </div>
          </div>
          <div className='row'>
              <div className='col-lg-12  topmargin'><p className='rights'>@2023Restaurants.AllRightsReserved</p></div>
          </div>
        </div>

    
    );
  }
  
export default footer;