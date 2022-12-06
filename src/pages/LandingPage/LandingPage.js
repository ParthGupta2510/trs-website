import Header from "../../components/Header/Header";
import RoboCarousal from "../../components/RoboCarousal/RoboCarousal";
import InitiativesCard from "../../components/InitiativesCard/InitiativesCard";

import { InitiativesData } from "../../data/LandingPage";

function LandingPage() {
    return (
        <>
            <Header />
            {/* Heading or TRS Logo + Name */}

            <RoboCarousal />
            <div className="initiativeCards">
                {InitiativesData.map((init, index) => {
                    return (
                        <InitiativesCard className="initiativeCard" key={index} cardData={init} />
                    );
                })}
            </div>
        </>
    );
}

export default LandingPage;
