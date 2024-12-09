'use client'
import React from 'react'
import './Footer.css'
import Copyright from './copyright'

function Footer() {
  return (
    <>
    <div id='footer-box'>
        <div class='footer_cols' id='first_col'>
            <ul class='cols'>
            <li><img src="logo.jpg" alt="Coos-Library"/></li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente aspernatur quis possimus,</li>
            <li>
                <div>Connect with us at</div>
                <div id='images'>
                    <a class='an' href="">In</a>
                    <a class='an' href="">Tw</a>
                    <a class='an' href="">Fa</a>
                    <a class='an' href="">LI</a>
                </div>
            </li>
        </ul>
        </div>
        <div class='footer_cols'>
            <ul class='cols'>
            <li>Categories</li>
            <li><a class='an' href="">Science Fiction</a></li>
            <li><a class='an' href="">Thriller</a></li>
            <li><a class='an' href="">Stories</a></li>
            <li><a class='an' href="">Religious</a></li>
            <li><a class='an' href="">Study</a></li>
        </ul>
        </div>
        <div class='footer_cols'>
        <ul class='cols'>
            <li>Support</li>
            <li><a class='an' href="">Contact Us</a></li>
            <li><a class='an' href="">FAQ</a></li>
            <li><a class='an' href="">Help</a></li>
        </ul>
        </div>
        <div class='footer_cols'>
        <ul class='cols'>
            <li>Policies</li>
            <li><a class='an' href="">Terms of Use</a></li>
            <li><a class='an' href="">Privacy Policy</a></li>
            <li><a class='an' href="">Refund Policy</a></li>
        </ul>
        </div>
    </div>
    <Copyright/>
    </>
  )
}

export default Footer