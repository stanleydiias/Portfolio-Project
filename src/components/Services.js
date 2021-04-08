import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { falaptopcode, } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const services = () => {
    return (
        <div className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>
                            <h3>Web Development</h3>
                            <p>Extensive knowledge in Front End development.</p>

                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Ui Design</h3>
                            <p>Objective in creating functional and usable interfaces, which provide good experiences for the user.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x" /></div>
                            <h3>Ux Design</h3>
                            <p>focusing on each step with which the user interacts with the product or service; making this interaction happen in the most elegant way possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default services
