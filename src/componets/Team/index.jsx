import HeadTile from "../HeadTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamCard from "./TeamCard";

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

function Team() {
    return (
        <div id="OUR-TEAM" className="bg-homeBg1 pt-20">
            <HeadTile title={"OUR TEAM"} />
            <div className="container px-3 md:px-0 mx-auto mt-5">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    transitionDuration={100}
                >
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </Carousel>;

            </div>
        </div>
    );
}

export default Team;