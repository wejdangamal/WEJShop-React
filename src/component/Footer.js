import React, { Component } from 'react'
import  { createElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faHome, faPhone, faPrint, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default class Footer extends Component {
    render() {
      
        return (
           <>
          
<footer className="text-center text-lg-start bg-light text-muted">
 
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    <div className="d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" className="me-4 text-reset">
       <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  
  </section>
 
  <section className="">
    <div className="container text-center text-md-start ">
    
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
          <FontAwesomeIcon icon={faShoppingCart}  /> WEJ Shop
          </h6>
          <p>
           Welcome to Our website Here we provide the best Products with the BEST Price
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Make Up</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Phones</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Labtops</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Ipads</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><FontAwesomeIcon icon={faHome} /> Egypt,Cairo</p>
          <p>
          <FontAwesomeIcon icon={faEnvelope} /> wejshop@gmail.com
          </p>
          <p><FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
          <p><FontAwesomeIcon icon={faPrint} /> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" >
    © 2021 Copyright :
    <a className="text-reset fw-bold" href="#"> Wejdan Jamal</a>
  </div>
</footer> 
           </>
        )
    }
}
