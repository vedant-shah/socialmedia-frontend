import React from 'react'
import { RiImageAddLine } from "react-icons/ri";
import { FaFacebookSquare, FaTwitter, FaTumblr } from "react-icons/fa";
import logo from '../images/instagraph-logo.png'
function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top" id='navbar'>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* <img src="https://www.seekpng.com/png/full/813-8136306_trend-new-instagram-logo-2019-png-edigital-instagram.png" alt="" width="100" className="d-inline-block align-text-top mx-3" /> */}
            <img src={logo} width="100" className="d-inline-block align-text-top mx-3" id='logo' alt="" />
          </a>
          <button id='postupload' data-bs-toggle="modal" data-bs-target="#exampleModal" ><RiImageAddLine className='navicon mx-3' /></button>
        </div>
      </nav>
      {/* Modal  */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title mx-auto" id="exampleModalLabel">Choose Image to Post</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center flex-column">
              <div className="ml-2 col-sm-6">
                <div id="msg"></div>
                <form method="post" id="image-form">
                  <input type="file" name="img[]" className="file" accept="image/*" />
                  <div className="input-group my-3">
                    <input type="text" className="form-control comment" disabled placeholder="banana.jpg" id="file" />
                    <div className="input-group-append">
                      <button type="button" className="browse btn btn-success">Browse...</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="ml-2 col-sm-6">
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="preview" id="preview" className="img-thumbnail" />
                <div className="form-floating my-2 ">
                  <textarea className="form-control postinput my-3 comment" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label htmlFor="floatingTextarea">Share your thoughts here...</label>
                  <p className="text-start my-1">Also post to:</p>
                </div>
                <div className="alsopostto text-start d-flex flex-column">
                  <div className="form-check form-switch d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault"><FaFacebookSquare id='fbicon' className='my-2' /></label>
                  </div>
                  <div className="form-check form-switch d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault"><FaTwitter id='fbicon' className='my-2' /></label>
                  </div>
                  <div className="form-check form-switch d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault"><FaTumblr id='fbicon' className='my-2' /></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar