import React from 'react'
import './Login.css'

function Signup() {
  return (
    <>
    <div id='box_l'>
        <div class='section' id='gif'>
            <img src="src/assets/istockphoto-849292906-612x612.jpg" alt="gif" />
        </div>
        <div class='section' id='card'>
            <form action="">
                <div class="lite_color">
                  <p>Sign Up</p>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="name">Name:</label>
                  <input class="input_v" type="text" id='name' name='name'/>
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
                <div class="f_items m">
                  <label htmlFor="c_pwd">Confirm Password:</label>
                  <input class="input_v" type="password" id='c_pwd' name='c_pwd'/>
                </div>
                <div id='bottom_login'>
                  <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label class="lite_color text-small" htmlFor="show_pwd">I agree with <a href="#" class="links_color">Privacy and Policy</a></label>
                  </div>
                </div>
                <br />
                <input type="submit" class='submit_b' id='sign_up' name='Sign Up' />
                 <p class="lite_color sm">or continued with</p>

                <div class="lite_color">
                <a class='an visit' href="">Go</a>
                <a class='an visit' href="">Fa</a>
                </div>
                <p class="lite_color sm">Already have an account? <a class="links_color" href="#">Log In</a></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signup