import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeadTile from "../HeadTitle";

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
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Carousel>;
                </div>
            </div>
        </div>
    );
}

export default Partners;