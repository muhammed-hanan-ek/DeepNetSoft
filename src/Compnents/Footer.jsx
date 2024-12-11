import React from 'react'
import './footer.css'
import Logo from '../images/Logo.png'

const Footer = () => {
  return (
    <>
        <div id='footer' className='p-5'>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
            <div style={{height:"200px",width:"370px"}} className="p-5 border rounded text-center mt-3" id='footerTopmin'>
                <div >
                    <div><img width={"100px"} style={{marginTop:"-125px"}} src={Logo} alt="Logo" /><br /></div>
                <div style={{marginTop:"10px",fontSize:"20px"}}>
                    <span className="mt-2 text-light">
                      <span style={{ color: '#0796EF' }} className="me-2">
                        DEEP
                      </span>
                      NET 
                      <span style={{ color: '#857878' }}> SOFT</span>
                    </span>
                </div>
                <div className="d-flex justify-content-center mt-2">
                <i class="fa-brands fa-facebook-f ms-3"></i>
                <i class="fa-brands fa-twitter ms-3"></i>
                <i class="fa-brands fa-youtube ms-3"></i>
                <i class="fa-brands fa-instagram ms-3"></i>
                </div>
                </div>
                </div>
                <div style={{height:"200px",width:"370px"}} className="p-5 border rounded text-center mt-3 ">
                    <div style={{color:"#0796EF",fontWeight:"BOLD"}}>CONNECT WITH US</div>
                    <div className="d-flex mt-2 text-align-center justify-content-center">
                    <i class="fa-solid fa-tty text-warning mt-1 me-2"></i>
                    <p style={{color:"#857878"}}>+91 9567843340</p>
                    </div>
                    <div className="d-flex mt-2 text-align-center justify-content-center">
                    <i class="fa-regular fa-envelope text-warning mt-1 me-2"></i>
                    <p style={{color:"#857878"}}>info@deepnetsoft.com</p>
                    </div>
                </div>
                <div style={{height:"200px",width:"370px"}} className="p-5 border rounded text-center mt-3" id='footerTop'>
                <div >
                    <div><img  id='logofooter' src={Logo} alt="Logo" /><br /></div>
                <div style={{fontSize:"30px",marginTop:"30px"}}>
                    <span className="mt-2 text-light">
                      <span style={{ color: '#0796EF' }} className="me-2">
                        DEEP
                      </span>
                      NET 
                      <span style={{ color: '#857878' }}> SOFT</span>
                    </span>
                </div>
                <div className="d-flex justify-content-center mt-2">
                <i class="fa-brands fa-facebook-f ms-3"></i>
                <i class="fa-brands fa-twitter ms-3"></i>
                <i class="fa-brands fa-youtube ms-3"></i>
                <i class="fa-brands fa-instagram ms-3"></i>
                </div>
                </div>
                </div>
                <div style={{height:"200px",width:"370px"}} className="p-5 border rounded text-center mt-3">
                    <div style={{color:"#0796EF",fontWeight:"BOLD"}}>FIND US</div>
                    <div className="d-flex mt-2 text-align-center justify-content-center">
                    <i class="fa-solid fa-location-dot mt-1 me-2 text-warning"></i>
                    <p style={{color:"#857878",textAlign:"justify"}}>First floor, Geo infopark,<br /> Infopark EXPY, Kakkanad</p>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div className="bg-dark w-100 footdown">
            <div className=" d-flex justify-content-evenly align-items-center">
                <p className='text-light pt-2'>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
                <div className="d-flex text-light pt-2">
                    <p className='me-3'>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer