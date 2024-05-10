import React from 'react'
import './signupbody.css'

const Signupbody = () => {
  return (
    <>
        <form className="body" action="">
       
            <div className="inputBox">
                <p>Sign up and start learning</p>
                <input type="text" placeholder='Full name'/>
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
                    <p>By signing up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
                </div>

                <div className="loginBox">
                    <p>
                        Already have an account? <span>
                        <a href="/students/login">
                                Log in
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            
            
           
            </form>
    </>
  )
}

export default Signupbody