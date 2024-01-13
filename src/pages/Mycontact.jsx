import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Mycontact() {
    return (
        <>
            <Header />
            <div className ="w-100 d-block pb-4 pb-sm-5 mb-md-1"></div>
            <div className ="container">
                <div className ="row justify-content-center">

                    <div className ="col-12 col-lg-11">

                        <div className ="d-flex flex-wrap align-items-center">
                            <h1 className ="h3 fw-bold d-inline me-3 mb-3 mb-md-0">Contacts <small className ="text-secondary">0</small></h1>

                            <div className ="col-12 col-md">
                                <div className ="d-flex align-items-center justify-content-between justify-content-md-end flex-wrap">
                                    <div className ="me-3">
                                        <form>
                                            <input type="text" className ="form-control" placeholder="Search" name="s" value=""/>
                                        </form>
                                    </div>
                                    <a href="" className ="btn btn-outline-primary">Export contacts</a>
                                </div>
                            </div>
                        </div>

                        <div className ="w-100 d-block mb-2 mb-sm-4 pb-4"></div>

                        <div className ="table-responsive mb-4">
                            <table className ="table align-middle">
                                <thead>
                                    <tr>
                                        <th className ="small fw-normal text-secondary border-0 border-bottom border-1 ps-0">Contact</th>
                                        <th className ="small fw-normal text-secondary text-center">Bookings</th>
                                        <th className ="small fw-normal text-secondary">Created</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className ="border-top">
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}
