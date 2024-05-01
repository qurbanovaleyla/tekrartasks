import React from 'react'
import styles from './main1.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Main1() {
  return (
    <div>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> <br /> <br />



    </div>
  )
}

export default Main1
