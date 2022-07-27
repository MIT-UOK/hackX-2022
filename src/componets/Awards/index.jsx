import HeadTile from "../HeadTitle";
import firstPlace from "../../assets/awards/firstPlace.webp"
import secondPlace from "../../assets/awards/secondPlace.webp"
import ThirdPalace from "../../assets/awards/thirdPlace.webp"
import useWindowDimensions from "../../hook/getWindowDimensions";

function Awards() {
    const { width } = useWindowDimensions();
    return (
        <div id="PRIZE" className="bg-homeBg1 pt-20">
            <HeadTile title={"PRIZE"} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 container mx-auto">
                <div className="flex  flex-col justify-center items-center">
                    <img src={secondPlace} alt="secondPlace" width={`${width >= 768 ? "50%" : "75%"}`} height={"auto"} />
                    <h1 className="text-xl text-primary">LKR 25000</h1>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 justify-start items-center order-first md:order-none">
                    <img src={firstPlace} alt="firstPlace" width={`${width >= 768 ? "70%" : "50%"}`} height={"auto"} />
                    <h1 className="text-2xl text-primary">LKR 25000</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={ThirdPalace} alt="ThirdPalace" width={`${width >= 768 ? "50%" : "75%"}`} height={"auto"} />
                    <h1 className="text-xl text-primary">LKR 25000</h1>
                </div>
            </div>
        </div>
    );
}

export default Awards;