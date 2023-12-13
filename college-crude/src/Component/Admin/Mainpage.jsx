import React from 'react'
import './Mainpage.css'
import { Link } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div>


      <div className="main-section">
      </div>
      <nav className="navbar-main navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className="nav-gifts">Home Page</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-main" id="navbarNav">

            <div>
              <Link className='nav-link active' id='' to={"/"}><span>HOME</span></Link>
            </div>
            <div>
              <Link className='nav-link active' to={"#"}><span>ABOUT</span></Link>
            </div>
            <div>
              <a className="nav-link active" href="#"><span>INFO</span></a>
            </div>
            <div>
              <a className="nav-link active" href="#"><span>SHOP</span></a>
            </div>
            <div>
              <Link className='nav-link active' to={"#"}><span>CONTACT US</span></Link>
            </div>


            <div>
              <a className="nav-link active" href="#"><span><i className="fa fa-user" aria-hidden="true"></i></span></a>
            </div>



            <Link className='nav-link active' to={"/Student_login"}><span>LOGIN</span></Link>

            <div><a className="nav-link active" href="#"><span><i className="fa fa-shopping-bag"
              aria-hidden="true"></i></span></a></div>


            <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
            </div>


          </div>
        </div>
      </nav>






      <div className="banner">
        <h2>University of Notre Dame</h2>
        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum quasi, sunt nesciunt cupiditate mollitia, explicabo autem expedita eligendi laboriosam minima eum aut nihil nisi, laborum esse at itaque delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque asperiores porro sunt. Quidem iste dolor minima amet, ad vel quas corporis consequatur beatae distinctio, vero cum. Esse, consectetur modi. adipisicing elit. Corrupti sequi voluptatum, saepe accusamus recusandae aperiam maxime maiores natus molestiae beatae unde reprehenderit distinctio doloremque! Dicta odit cumque numquam autem voluptatem.</p>


        <div className="mainbtn">
          <div className="buttons-full-data">
            <a href="" >More Details</a>
            <a href="" id='bttt'>View More</a>
          </div>
        </div>

      </div>




      <div className="images-part">
        <div className='images-full'><img src="../../../public/pexels-nappy-935949.jpg" alt="" /></div>

        <div className='para'>
          <div className="head">
            <h4> Group Discussion</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea ipsa doloribus, minus quisquam esse natus minima incidunt autem optio voluptate. Possimus consectetur voluptatem beatae corporis cumque molestiae voluptates vitae.</p>

        </div>

      </div>


      <div className="third-main-background">
        <div className="full-data-king">
          <div className="row">
            <div className="col-lg-0">

            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 data-king">
              <h4>Want to contact us?</h4>
              <p>Connect with our friendly community on About-Us, a chat and networking platform or <a href="">send us an email.</a></p>
              <div className="button-only-main">
                <button id="button-sec-main">Show More</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="carouselExampleControls" className="carousel slide caro-width" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active text-only">
            <h4>Details</h4>
            <h5>Default model text</h5>
            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model
              text, and a search for lorem ipsum will uncover many web sites still in their infancy. editors now use
              Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still
              in their infancy.</p>
          </div>
          <div className="carousel-item text-only">
            <h4>Data includes</h4>
            <h5>Default model text</h5>
            <p>editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many
              web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a
              search for lorem ipsum will uncover many web sites still in their infancy. Variouseditors now use Lorem
              Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
              their infancy. Various</p>
          </div>
          <div className="carousel-item text-only">
            <h4>More info</h4>
            <h5>Default model text</h5>
            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model
              text, and a search for lorem ipsum will uncover many web sites still in their infancy. editors now use
              Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still
              in their infancy.</p>
          </div>
        </div>
        <div className="prevoise-button-main">
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <i className="fa fa-chevron-left pre-log" aria-hidden="true"></i>
            <span className="visually-hidden ">Previous</span>
          </button>
        </div>
        <div className="next-button-main">
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <i className="fa fa-chevron-right pre-log2" aria-hidden="true"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="support-full">
        <div className="support-us">
          <h2>Contact us!</h2>
        </div>
        <div className="support-para">
          <p>The Home Project is funded by the community. Join us in empowering learners around the globe by supporting
            The Home Project!</p>
        </div>
        <div className="support-links">
          <a href="#" id="learn-more">Learn more</a>
          <a href="#" id="Donate-now">Click now<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>

      </div>


      <section id="offerd-courses">
        <div className="courses-main">
          <div className="offerd-heading"> <h1>Programms Offered</h1>
            <p>Institution offers Post Graduate and Under Graduate programmes in various subjects</p></div>
          <div className="list">
            <div className="list-sub">
              <p>BCOM CO-OPERATION</p>
            </div>
            <div className="list-sub">
              <p>BCOM FINANCE</p>
            </div>
            <div className="list-sub">
              <p>B COM COMPUTER APPLICATION</p>
            </div>
            <div className="list-sub">
              <p>BBA</p>
            </div>
          </div>
          <div className="list">
            <div className="list-sub">
              <p>BA ENGLISH</p>
            </div>
            <div className="list-sub">
              <p>BA ECNOMICS</p>
            </div>
            <div className="list-sub">
              <p>BCA</p>
            </div>
            <div className="list-sub">
              <p>BCS PHYSICS</p>
            </div>
          </div>
          <div className="list">
            <div className="list-sub">
              <p>MA ENGLISH</p>
            </div>
            <div className="list-sub">
              <p>MCOM FINANCE</p>
            </div>
          </div>
        </div>


      </section>



      <div className="footer-main">
        <div className="footer-icons-main">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="footer-flex-main-contents">
          <div className="footer-first">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-second">
            <h3>Newsletter</h3>
            <div><a href="">SUBSCRIBE</a></div>
          </div>
          <div className="footer-third">
            <h3>NEED HELP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-four">
            <h3>CONTACT US</h3>
            <div className="footer-four-for-margin">
              <div><i className="fa fa-map-marker" aria-hidden="true"></i><span><a href="">Gb road 123 london Uk</a></span>
              </div>
              <div><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="">+01 12345678901</a></span></div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span><a href="">demo@gmail.com</a></span></div>
            </div>
          </div>





        </div>

      </div>















    </div>


  )
}

export default Mainpage

