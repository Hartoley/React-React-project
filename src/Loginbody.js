import React from 'react'
import './Loginbody.css'
import google from './Images/google1.png'
import facebook from './Images/facebook.png'
import apple from './Images/apple.png'


const Loginbody = () => {
  return (
    <>    <form action="" className="body">  
         
            <div className="inputBox">
                <p>Log in to your Udemy account</p>
                <div className="others">
                <img id='google' src={google} alt="" />
                    <div className="small">
                     
                        <p>Continue with Google</p>
                    </div>
                </div>
                <div className="others">
                <img src={facebook} id='google' alt="" />
                <div className="small">
                  
                    <p>Continue with Facebook</p>
                </div>
                </div>
                <div className="others">
                <img src={apple} id='google' alt="" />
                <div className="small">
                       
                        <p> Continue with Apple</p>
                    </div>
                </div>
                
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <div className="lineBox">
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                </div>

                <div className="checkContainer">
                    <input type="checkbox" />
                    <p>Send me special offers, personalized, recommendations, and learning tips</p>
                </div>
                <button className='buttonSignin'>Sign up</button>
              
                <div className="termsBox">
                    <p>Or <span>Forgot Password</span></p>
                </div>

                <div className="loginBox">
                    <p>
                        Don't have an account?  <span>
                        <a href="/students/signup">
                            Sign up
                            Log in with your organization
                            </a>
                           
                        </span>
                    </p>
                </div>
            </div>
            
            
           
      
        </form>
    </>
  )
}

export default Loginbody