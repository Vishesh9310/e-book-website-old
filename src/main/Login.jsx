"use client"
import React from 'react'
import './Login.css'


function Login() {
  return (
    <>
    <div id='box_l'>
        <div class='section' id='gif'>
            <img src="src/assets/istockphoto-849292906-612x612.jpg" alt="gif" />
        </div>
        <div class='section' id='card'>
            <form action="">
                <div class="lite_color">
                  <p>Log In</p>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="email">Email:</label>
                  <input class="input_v" type="email" id='email' name='email'/>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="password">Password:</label>
                  <input class="input_v" type="password" id='password' name='password' />
                </div>
                <br />
                <div id='bottom_login'>
                  <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label class="lite_color text-small" htmlFor="show_pwd">Show Password</label>
                  </div>
                  <div>
                    <a class="links_color text-small" href="#">Forgot Password?</a>
                  </div>
                </div>
                <br />
                <input type="submit" id='submit' class='submit_b' name='Submit' />

                <p class="lite_color sm">or continued with</p>

                <div class="lite_color">
                <a class='an visit' href="">Go</a>
                <a class='an visit' href="">Fa</a>
                </div>
                <p class="lite_color sm">Don't have an account? <a class="links_color" href="#">Sign up</a></p>
                
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Login