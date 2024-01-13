import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function DatePolls() {
    return (
        <>
            <Header />
            <div className ="w-100 d-block pb-4 pb-sm-5 mb-md-1"></div>
            <div className ="container">

                <div className ="row justify-content-center">

                    <div className ="col-12 col-lg-9 col-xl-8 col-xxl-7">

                        <div className ="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <h1 className ="h3 fw-bold d-inline me-3 mb-0 mb-4 mb-md-0">Date polls</h1>

                            <div className ="col-12 col-md d-flex align-items-center justify-content-between flex-wrap">

                                <a href="" className ="btn btn-outline-primary mb-3 mb-md-0 me-3">+ Create new date poll</a>

                                <div className ="d-flex align-items-center mb-3 mb-md-0 col-8 col-sm-4">
                                    <label className ="me-2">View: </label>
                                    <form className ="w-100">
                                        <select name="show" className ="form-control">
                                            <option value="all">All polls</option>
                                            <option value="open">Open polls</option>
                                            <option value="finished">Finished polls</option>
                                        </select>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className ="pb-4 mb-4"></div>

                <div className ="row justify-content-center">

                    <div className ="col-12 col-lg-9 col-xl-8 col-xxl-7">
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
