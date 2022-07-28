import HeadTile from "../HeadTitle";
import firstPlace from "../../assets/awards/firstPlace.webp"
import secondPlace from "../../assets/awards/secondPlace.webp"
import ThirdPalace from "../../assets/awards/thirdPlace.webp"
import useWindowDimensions from "../../hook/getWindowDimensions";

function Awards() {
    const { width } = useWindowDimensions();
    return (
        <div id="PRIZES" className="bg-homeBg1 pt-20">
            <HeadTile title={"PRIZES"} />
            <h1 className="text-center pb-5 text-2xl text-white font-no">Take the <span className="font-bold">challenge</span> to win amazing <span className="font-bold">cash prizes</span> !</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 container mx-auto">
                <div className="flex  flex-col justify-center items-center">
                    <img src={secondPlace} alt="secondPlace" width={`${width >= 768 ? "50%" : "75%"}`} height={"auto"} />
                    <h1 className="text-xl md:text-2xl text-white font-semibold pt-3">LKR 60,000</h1>
                    <h1 className="text-xl md:text-2xl text-gray-light">1<sup className="ordinal">st</sup> Runner-Up</h1>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 justify-start items-center order-first md:order-none">
                    <img src={firstPlace} alt="firstPlace" width={`${width >= 768 ? "70%" : "50%"}`} height={"auto"} />
                    <h1 className="text-3xl text-white font-semibold pt-3">LKR 100,000</h1>
                    <h1 className="text-xl md:text-2xl text-gray-light  ">Winner</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={ThirdPalace} alt="ThirdPalace" width={`${width >= 768 ? "50%" : "75%"}`} height={"auto"} />
                    <h1 className="text-xl md:text-2xl text-white font-semibold pt-3">LKR 40,000</h1>
                    <h1 className="text-xl md:text-2xl text-gray-light">2<sup>nd</sup> Runner-Up</h1>
                </div>
            </div>
        </div>
    );
}

export default Awards;