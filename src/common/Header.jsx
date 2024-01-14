import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-lg-3">
                <div className="container-fluid">

                    <div className="d-flex align-items-center">
                        <Link to={'/dashboard'} className="tidycalLogoIcon tidycalLogo ms-0 ms-md-1 d-inline-block"></Link>
                    </div>

                    <button className="navbar-toggler border-0 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-between align-items-center col text-center">
                            <div aria-hidden="true"></div>
                            <div className="d-flex flex-column flex-lg-row">
                                <Link to={'/dashboard'} className="nav-link small mx-2 active" aria-current="page" >Booking Types</Link >
                                <Link to={'/datepolls'} className="nav-link small mx-2 ">Date Polls</Link >
                                <Link to={'/mybooking'} className="nav-link small mx-2 ">My Bookings</Link >
                                <Link to={'/mycontact'} className="nav-link small mx-2 ">My Contacts</Link >
                                <div className="pb-3 mt-3 border-top d-lg-none"></div>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none " href="">Settings</a>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none " href="">Integrations</a>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none " href="">Directory</a>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none" href="">Pricing</a>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none" href="" target="_blank">Roadmap</a>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none" href="" target="_blank">Feature requests</a>
                                <a className="nav-link small mx-2 d-inline-block d-lg-none" href="">Help</a>
                                <form method="POST" action="">
                                    <input type="hidden" name="_token" value="" />
                                    <a href="" className="nav-link small mx-2 d-inline-block d-lg-none">
                                        Logout
                                    </a>
                                </form>

                            </div>
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                                <div className="mt-2 mb-3 my-lg-0">
                                    <a href="" className="small text-decoration-none" target="_blank"><strong>Upgrade $29 lifetime access!</strong></a>
                                </div>

                                <div className="d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center ms-lg-3 mt-3 mt-lg-0 mb-0">

                                    <div className="d-flex flex-column flex-lg-row align-items-center position-relative">
                                        <div className="profilepic me-2 mb-2 mb-lg-0">
                                            <img src="https://www.gravatar.com/avatar/81fbaaead17eefcf2e2a058a6b01053a?d=404&amp;s=200" />
                                        </div>
                                        <a href="" className="stretched-link nav-link p-0">
                                            <div className="userName nav-username d-none d-lg-block text-truncate">Yogesh</div>
                                            <div className="userName nav-username d-block d-lg-none">Yogesh</div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center my-2 my-lg-0">

                                    </div>
                                </div>

                                <div className="ms-lg-3 small text-secondary position-relative reveal-child mb-3 mb-lg-0 d-flex align-items-center">

                                    <span className="text-tiny me-1">EARNINGS:</span> $0.00
                                    <div className="position-absolute rounded-3 border bg-white p-3 shadow reveal-child-child nav-earnings-banner">
                                        Use a chargeable booking type to start earning money with TidyCal.
                                    </div>

                                </div>

                                <div className="dropdown d-none d-lg-block">
                                    <button className="btn px-2 btn-outline-light border-0 ms-3" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                        <li><a className="dropdown-item" href="">Settings</a></li>
                                        <li><a className="dropdown-item" href="">Integrations</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="" target="_blank">Directory</a></li>
                                        <li><a className="dropdown-item" href="" target="_blank">Pricing</a></li>
                                        <li><a className="dropdown-item" href="" target="_blank">Roadmap</a></li>
                                        <li><a className="dropdown-item" href="" target="_blank">Feature requests</a></li>
                                        <li><a className="dropdown-item" href="">Help</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <form method="POST" action="">
                                                <input type="hidden" />
                                                <a href="" className="dropdown-item">
                                                    Logout
                                                </a>
                                            </form>
                                        </li>
                                    </ul>
                                </div>




                            </div>
                        </div>


                    </div>

                </div>
            </nav>
        </>
    )
}
