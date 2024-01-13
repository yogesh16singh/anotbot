import React from 'react'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <>
            <section className='container-fluid '>
                <div className ="container">
                    <div className ="row justify-content-center">
                        <div className ="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className ="text-center w-100 mt-4 mb-4 mt-md-4 mb-md-5 fw-light h5">
                                <a className ="tc-logo-nav tidycalLogo ms-0 ms-md-1 d-inline-block" href="https://tidycal.com" aria-label="TidyCal"></a>

                            </div>

                            <form>
                                <input type="hidden" name="" value="" />
                                <div className ="card justify-content-start">
                                    <div className ="p-3 border-bottom">
                                        <h1 className ="h3 fw-light mb-0 text-center">Login</h1>
                                    </div>
                                    <div className ="p-3 p-sm-4">
                                        <div className ="mb-4">
                                            <label for="email" className ="form-label fw-bold">Your email:</label>
                                            <input type="email" name="email" id="email" className ="form-control" autocomplete="email" required="" autofocus=""/>
                                        </div>
                                        <div className ="mb-4">
                                            <label for="password" className ="form-label fw-bold">Your password:</label>
                                            <input type="password" name="password" id="password" className ="form-control" autocomplete="current-password" required=""/>
                                        </div>
                                        <div className ="mb-4">
                                            <div className ="form-check">
                                                <input className ="form-check-input" name="remember" type="checkbox" id="remember_me"/>
                                                    <label className ="form-check-label" for="remember_me">
                                                        Remember me
                                                    </label>
                                            </div>
                                        </div>

                                        <Link to={'/dashboard'} type="submit" className ="btn btn-primary w-100 mb-3">Login →</Link>

                                        <div className ="d-flex align-items-center mb-3">
                                            <div className ="col pt-1 mb-1 border-bottom"></div>
                                            <div className ="text-secondary fst-italic mx-3 small">Or:</div>
                                            <div className ="col pt-1 mb-1 border-bottom"></div>
                                        </div>

                                        <a className ="btn border-primary w-100 mb-4">
                                            <div className ="d-flex align-items-center justify-content-between">
                                                <img height="23" className ="me-3" src="https://tidycal.com/img/integration-logo-google.png"/>
                                                    <span className ="">Login with Google</span>
                                                    <div aria-hidden="true"></div>
                                            </div>
                                        </a>

                                        <div className ="d-flex align-items-center justify-content-between flex-wrap">
                                            <a className ="my-2 small text-decoration-none me-3">
                                                Forgot your password?
                                            </a>

                                            <a className ="my-2 small text-decoration-none">Not registered?</a>
                                        </div>

                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
  )
}
