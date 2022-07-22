import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './style.css'
export default class Nav extends Component {
    render() {
      
      const {count}=this.props

        return (
          <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <h1 className="navbar-brand text-danger" href="#">WEJ</h1>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link active" aria-current="page" href="#">MakeUp</a>
                    <a className="nav-link active" aria-current="page" href="#">Phones</a>
                    <a className="nav-link active" aria-current="page" href="#">Labtops</a>
                  </div>
                  </div>
                <span className="text"> <strong><FontAwesomeIcon className="text-dark" icon={faShoppingCart}/> count: {count}</strong> </span>
                </div>
             </nav>
          </div>
        )
    }
}
