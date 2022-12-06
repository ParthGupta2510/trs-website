import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import "../../pages/LandingPage/LandingPage.css";

export default function InitiativesCard(props) {

    const [cardData, setCardData] = useState('');

    useEffect(() => {
        setCardData(props.cardData);
    }, []);

    return (
        <MDBCard className="initiativeCard">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' style={{"textAlign": "centre"}}>
                <MDBCardImage src={cardData.imgUrl} fluid alt={cardData.title} />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{cardData.title}</MDBCardTitle>
                <MDBCardText>
                    {cardData.description}
                </MDBCardText>
                <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}