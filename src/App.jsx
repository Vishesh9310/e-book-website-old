"use client"
import './App.css'
import Footer from './main/Footer'
import Home_screen from './screen/Home_screen'
import Login_screen from './screen/Login_screen'
import Signup_screen from './screen/Signup_screen'

function App() {

  return (
    <>
    <h1>Home Screen</h1>
    <Home_screen/>
    <h1>Login screen</h1>
    <Login_screen/>
    <h1>Signup screen</h1>
    <Signup_screen/>
    </>
  )
}

export default App