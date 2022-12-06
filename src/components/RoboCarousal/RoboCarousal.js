import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { RoboCarousalData } from "../../data/LandingPage"
import "./RoboCarousal.css";

export default function RoboCarousal() {
    return (
        <MDBCarousel showIndicators showControls fade>
            {
                RoboCarousalData.map((init, index) => {
                    return (
                        <div className='roboCarousalContainer'>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={index + 1}
                                key={index}
                                src={init.image}
                                alt={init.description}
                            >
                                <h5>
                                    {init.title}
                                </h5>
                                <p>
                                    {init.description}
                                </p>
                            </MDBCarouselItem>
                        </div>
                    )
                })
            }
        </MDBCarousel>
    );
}