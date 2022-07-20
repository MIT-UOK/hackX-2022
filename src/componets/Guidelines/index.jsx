import Button from "../Button";
import HeadTile from "../HeadTitle";
import List from "../List";
import Card from "./Card";
import stepToFollow from "./stepToFollow";
import thingsToRemember from "./thingsToRemember";
import Title from "./Title";

function Guidelines() {
    return (
        <div id="GUIDLINES" className="bg-homeBg1 pt-20">
            <HeadTile title={"GUIDLINES"} />
            <div className="container px-3 md:px-0 mx-auto">
                <div className="my-12 grid grid-cols-1 gap-10 sm:my-16 md:grid-cols-2   ">
                    <Card>
                        <Title title={"STEPS TO FOLLOW"} />
                        <div className="flex  justify-center items-center">
                            <List listItems={stepToFollow} />
                        </div>
                    </Card>
                    <Card>
                        <Title title={"THINGS TO REMEMBER"} />
                        <div className=" flex justify-center items-center  px-4">
                            <List listItems={thingsToRemember} />
                        </div>
                    </Card>
                </div>
                <div className="text-center pb-10">
                    <Button title={"All Rules and Regulations"} />
                </div>
            </div>
        </div>


    );
}

export default Guidelines;