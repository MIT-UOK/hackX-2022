import HeadTile from "../HeadTitle";
import firstPlace from "../../assets/awards/1.png"
import secondPlace from "../../assets/awards/2.png"
import ThirdPalace from "../../assets/awards/3.png"

function Awards() {
    return (
        <div className="bg-homeBg1 pt-20">
            <HeadTile title={"AWARDS"} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto pt-20">
                <div className="flex flex-col justify-center items-center">
                    <img src={secondPlace} alt="secondPlace" width={"60%"} height={"auto"} />
                    <h1 className="text-4xl text-primary">LKR</h1>
                    <h1 className="text-4xl text-primary">25000</h1>
                </div>
                <div className="flex flex-col justify-start items-center">
                    <img src={firstPlace} alt="firstPlace" width={"80%"} height={"auto"} />
                    <h1 className="text-4xl text-primary">LKR</h1>
                    <h1 className="text-4xl text-primary">25000</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={ThirdPalace} alt="ThirdPalace" width={"60%"} height={"auto"} />
                    <h1 className="text-4xl text-primary">LKR</h1>
                    <h1 className="text-4xl text-primary">25000</h1>
                </div>
            </div>
        </div>
    );
}

export default Awards;