import "./index.css"
import img1 from "../../assets/gallery/1.jpg"
import img2 from "../../assets/gallery/2.jpg"
import img3 from "../../assets/gallery/3.jpg"
import img4 from "../../assets/gallery/4.jpg"
// import img5 from "../../assets/gallery/5.jpg"
// import img6 from "../../assets/gallery/6.jpg"
// import img7 from "../../assets/gallery/7.jpg"
// import img8 from "../../assets/gallery/8.jpg"
// import img9 from "../../assets/gallery/9.jpg"


function Slider() {
    return (
        <div className="slides slowFade">
            <div className="slide">
                <img src={img1} alt="img" />
            </div>
            <div className="slide">
                <img src={img2} alt="img" />
            </div>
            <div className="slide">
                <img src={img3} alt="img" />
            </div>
            <div className="slide">
                <img src={img4} alt="img" />
            </div>
        </div>

    );
}

export default Slider;