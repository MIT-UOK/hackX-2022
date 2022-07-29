import img1 from "../../assets/gallery/1.jpg"
import img2 from "../../assets/gallery/2.jpg"
import img3 from "../../assets/gallery/3.jpg"
import img4 from "../../assets/gallery/4.jpg"
import img5 from "../../assets/gallery/5.jpg"
import img6 from "../../assets/gallery/6.jpg"
import img7 from "../../assets/gallery/7.jpg"
import img8 from "../../assets/gallery/8.jpg"
import img9 from "../../assets/gallery/9.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Slider() {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            transitionDuration={1000}
            customTransition="all 1s linear"
            containerClass="z-10"
            // arrows={false}
            swipeable={true}
        >
            <div >
                <img src={img1} alt="img" />
            </div>
            <div >
                <img src={img2} alt="img" />
            </div>
            <div >
                <img src={img3} alt="img" />
            </div>
            <div >
                <img src={img4} alt="img" />
            </div>
            <div >
                <img src={img5} alt="img" />
            </div>
            <div >
                <img src={img6} alt="img" />
            </div>
            <div >
                <img src={img7} alt="img" />
            </div>
            <div >
                <img src={img8} alt="img" />
            </div>
            <div >
                <img src={img9} alt="img" />
            </div>

        </Carousel>


    );
}

export default Slider;