import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Mybooking() {
    return (
        <>
            <Header />
            <div className ="w-100 d-block pb-4 pb-sm-5 mb-md-1"></div>
            <div className ="container">
                <div className ="row justify-content-center">

                    <div className ="col-12 col-lg-11">

                        <div className ="d-flex flex-wrap align-items-center">
                            <h1 className ="h3 fw-bold d-inline me-3 mb-3 mb-md-0">
                                Bookings <small className ="text-secondary">
                                    0
                                </small>
                            </h1>

                            <div className ="col-12 col-md">
                                <div className ="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                                    <div className ="d-flex align-items-center flex-wrap me-3 mb-3 mb-md-0">
                                        <div className ="me-2">Filter:</div>
                                        <form >
                                            <select name="show" className ="form-control">
                                                <option value="upcoming">Upcoming bookings</option>
                                                <option value="past">Past bookings</option>
                                                <option value="cancelled">Cancelled bookings</option>
                                                <option value="all">All bookings</option>
                                            </select>
                                        </form>
                                    </div>
                                    <a href="" className ="btn btn btn-outline-secondary me-3 mb-3 mb-md-0">
                                        Export bookings
                                        <div className ="icon-info ms-1">?</div>
                                    </a>

                                    <div>
                                        <a href="" className ="btn btn-outline-secondary mb-3 mb-md-0 px-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Switch to Calendar View">
                                            <svg width="24" height="24" data-name="List Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><rect className ="calendarIcon" x="2" y="4" width="20" height="18" rx="2" ry="2"></rect><line className ="calendarIcon" x1="8" y1="2" x2="8" y2="6"></line><line className ="calendarIcon" x1="16" y1="2" x2="16" y2="6"></line><line className ="calendarIcon" x1="2" y1="10" x2="22" y2="10"></line><line className ="calendarIcon" x1="2" y1="16" x2="22" y2="16"></line><line className ="calendarIcon" x1="9" y1="10" x2="9" y2="22"></line><line className ="calendarIcon" x1="15" y1="10" x2="15" y2="22"></line></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="w-100 d-block mb-2 mb-sm-4 pb-4"></div>
                        <div className ="table-responsive mb-4">
                            <div>
                                You have no upcoming bookings.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}
