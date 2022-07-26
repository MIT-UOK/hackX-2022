import HeadTile from "../HeadTitle";
import firstPlace from "../../assets/awards/firstPlace.webp"
import secondPlace from "../../assets/awards/secondPlace.webp"
import ThirdPalace from "../../assets/awards/thirdPlace.webp"

function Awards() {
    return (
        <div id="PRIZE" className="bg-homeBg1 pt-20">
            <HeadTile title={"PRIZE"} shadow={true} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <img src={secondPlace} alt="secondPlace" width={"50%"} height={"auto"} />
                    <h1 className="text-4xl text-primary">LKR 25000</h1>
                </div>
                <div className="flex flex-col justify-start items-center order-first md:order-none">
                    <img src={firstPlace} alt="firstPlace" width={"80%"} height={"auto"} />
                    <h1 className="text-4xl text-primary">LKR 25000</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={ThirdPalace} alt="ThirdPalace" width={"50%"} height={"auto"} />
                    <h1 className="text-4xl text-primary">LKR 25000</h1>
                </div>
            </div>
        </div>
    );
}

export default Awards;