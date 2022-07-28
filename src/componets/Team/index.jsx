import HeadTile from "../HeadTitle";
import TeamCard from "./TeamCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../../assets/team/1.png"
import pic2 from "../../assets/team/2.png"
import pic3 from "../../assets/team/3.png"
import pic4 from "../../assets/team/4.jpg"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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

function Team() {
    return (
        <div id="OUR-TEAM" className="bg-homeBg1 pt-20">
            <HeadTile title={"OUR TEAM"} />
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
                        <TeamCard name={"Waruna Sri Wickramasinghe"} position={"Co-Chief Coordinator"} src={pic3} />
                        <TeamCard name={"Thakshana Selvakumar"} position={"Co-Chief Coordinator"} src={pic2} />
                        <TeamCard name={"Manod De Silva"} position={"Financial Coordinator"} src={pic4} />
                        <TeamCard name={"Vishaka Bandara"} position={"Financial Coordinator"} src={pic1} />
                        {/* <TeamCard />
                        <TeamCard />
                        <TeamCard /> */}
                    </Carousel>;
                </div>
            </div>
        </div>
    );
}

export default Team;