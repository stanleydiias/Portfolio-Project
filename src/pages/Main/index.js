import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Particles from "react-particles-js"

const Main = () => {
    return (
        <div>
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#04BDFB"
                            }
                        }
                    }
                }}
            />
            <Navbar />
            <Header />
        </div>
    )
}

export default Main
