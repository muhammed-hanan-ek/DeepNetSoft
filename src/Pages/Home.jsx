import React from 'react'
import './home.css'
import img1 from '../images/Frame2.png'
import img2 from '../images/Frame.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div id='home' className='container-fluid'>
       <div className="row">
        <div className="col-lg-1 mt-5 frame2">
            <img src={img1} alt="" />
        </div>
        <div className="col-lg-10">
           <div className='text-light sentance'> DISCOVER THE TASTE <br /> OF REAL FOOD</div>
           <div className="button">
            <Link style={{textDecoration:"none",backgroundColor:"white",color:"black",fontWeight:"bold"}} className='p-3 rounded' to={'/menu'}>
            Get Started
            </Link>
           </div>
        </div>
        <div className="col-lg-1 mt-5 frame2">
            <img src={img2} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Home