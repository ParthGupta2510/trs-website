import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { FooterLinks } from '../../data/LandingPage';

export default function Footer() {
    return (
        <MDBFooter className='bg-light text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    {
                        FooterLinks.map(link => {
                            return (
                                <MDBBtn
                                    key={link.id}
                                    floating
                                    className='m-1'
                                    style={{ backgroundColor: `${link.bg}` }}
                                    href={link.url}
                                    role='button'
                                >
                                    <MDBIcon fab icon={link.icon} />
                                </MDBBtn>
                            )
                        })
                    }
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright: Technology Robotix Society
                {/* <a className='text-white' href='https://mdbootstrap.com/'>
                    MDBootstrap
                </a> */}
            </div>
        </MDBFooter>
    );
}