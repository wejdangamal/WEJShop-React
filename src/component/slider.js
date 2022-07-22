import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import pic1 from './iphone.jpg'
import pic2 from './makeup.jpg'
import pic3 from './phones.jpg'
import pic4 from './laptobs.jpg'
import  { createElement } from 'react';
import './style.css'
export default class Slider extends Component {
    render() {
        return (
            <>
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Labtops</h5>
      <p>All Your Fav typies of Labtops</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Iphone</h5>
      <p>All Typies Of Iphone Phone With The best Price.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Make Up</h5>
      <p>The Best Make Up With The Best Price.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </>
        )
    }
}
