import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeadTile from "../HeadTitle";
import sana from "../../assets/sponsors/RedSana.png"
import creativeSoftware from "../../assets/sponsors/Creative Software_Large-01.png"
import ideamart from "../../assets/sponsors/ideamart.png"
import Evonsys from "../../assets/sponsors/Evonsys.png"
import Connex from "../../assets/sponsors/Connex.png"
import x99 from "../../assets/sponsors/99x.png"
import loonslab from "../../assets/sponsors/loonslab.png"
import ICTA from "../../assets/sponsors/ICTA.png"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Partners() {
    return (
        <div id="PARTNERS" className="bg-homeBg1 pt-20">
            <HeadTile title={"PARTNERS"} />
            <div className="container px-3 md:px-0 mx-auto pt-12">
                <div >
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        transitionDuration={1000}
                        customTransition="all 1s linear"
                        arrows={false}
                    >
                        <Card src={sana} alt="sana logo" relationship={"THE OFFICIAL MAIN SPONSOR"} />
                        <Card src={creativeSoftware} alt="creative Software logo" relationship={"THE OFFICIAL CO - SPONSOR"} />
                        <Card src={Connex} alt="Connex logo" relationship={"THE OFFICIAL CO - SPONSOR"} />
                        <Card src={ideamart} alt="ideamart logo" relationship={"THE OFFICIAL VENUE PARTNER"} />
                        <Card src={Evonsys} alt="Evonsys logo" relationship={"THE OFFICIAL TALENT PARTNER"} />
                        <Card src={x99} alt="99x logo" relationship={"THE OFFICIAL MENTORING PARTNER"} />
                        <Card src={loonslab} alt="loonslab logo" relationship={"THE OFFICIAL INNOVATION PARTNER"} />
                        <Card src={ICTA} alt="ICTA logo" relationship={"THE OFFICIAL NATIONAL PARTNER"} />
                    </Carousel>;
                </div>
            </div>
        </div>
    );
}

export default Partners;
