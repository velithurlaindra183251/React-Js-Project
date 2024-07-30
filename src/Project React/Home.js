import React from 'react'
import pic from '../images/image (4).jpg'
import pic1 from '../images/image (5).jpg'
import pic2 from '../images/image (6).jpg'
import pic3 from '../images/indra img.jpg'
export default function Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" >
            <img src={pic2} className="d-block w-100" alt="..." />
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



      <div className='container' style={{ marginTop: 20, }} >
        <div className='row'>
          <div className='col-md-8' style={{ marginTop: 20 }}>
            <h1 style={{ color: 'green' }}>HI 👋</h1>
            <h1><span style={{ color: 'black' }}>I'm INDRA VELITHURLA</span></h1>
            <h1 className="Pt-1"> FRONT-END DEVELOPER</h1>
            <p className='pt-1' style={{ fontFamily: 'inherit' }}><b>Front-end developers </b>are those professionals who work on the design and implementation of the interface through which users view and interact. In simple terms, they use technologies like <b> HTML, CSS, JavaScript and React</b> to make the UI (User Interface) look engaging. Front-End is again divided into two sections – UI (User’s Interface) and UX (User’s Experience). The user interface is the graphical bridge that connects Front-End development and User Experience</p>
            <br />
            <br />
            <button style={{ backgroundColor: 'green', color: 'white' }}>Start now</button><br />
          </div>
          <div className='col-md-4'>
            <img src={pic3} alt='' style={{ padding: 60, borderRadius: '50%' }} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h4 className='p-3' style={{ fontFamily: 'serif' }}>Send us a message<b> velithurlaindra.in@trainee.me</b></h4>
          </div>

        </div>
      </div>

    </>
  )
}