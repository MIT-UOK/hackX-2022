import HeadTile from "../HeadTitle";
import TeamCard from "./TeamCard";


function Team() {
    return (
        <div id="OUR-TEAM" className="bg-homeBg1 pt-20">
            <HeadTile title={"OUR TEAM"} />
            <div className="container px-3 md:px-0 mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>

            </div>
        </div>
    );
}

export default Team;