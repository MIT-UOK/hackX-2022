import HeadTile from '../HeadTitle';
import "./index.css"
import { useState } from "react";


function TimeLine() {
    const [selectedIndex, setSelectedIndex] = useState(2)
    const [lineWidth, setLineWidth] = useState("50%")

    const callLineWidth = (index) => {
        setSelectedIndex(index)
        setLineWidth(`${index * 25}%`)
    }

    return (
        <div id="TIME-LINE" className='bg-homeBg1 pt-20'>
            <HeadTile title={"TIME LINE"} />


            <div id="progress-bar-container">
                <ul>
                    <li className={selectedIndex == 0 ? "step active" : "step"} onClick={() => callLineWidth(0)}><div className="step-inner">Registrations</div></li>
                    <li className={selectedIndex == 1 ? "step active" : "step"} onClick={() => callLineWidth(1)}><div className="step-inner">Proposal submission</div></li>
                    <li className={selectedIndex == 2 ? "step active" : "step"} onClick={() => callLineWidth(2)}><div className="step-inner">hackX Initial Ideation</div></li>
                    <li className={selectedIndex == 3 ? "step active" : "step"} onClick={() => callLineWidth(3)}><div className="step-inner">designX</div></li>
                    <li className={selectedIndex == 4 ? "step active" : "step"} onClick={() => callLineWidth(4)}><div className="step-inner">hackX 2022: Finals</div></li>
                </ul>

                <div id="line">
                    <div id="line-progress" style={{ width: `${lineWidth}` }}></div>
                </div>
            </div>

            <div id="progress-content-section">
                <div className={selectedIndex == 0 ? "section-content active" : "section-content"}>
                    <h1>Registrations</h1>
                    <h2>July 13th - August 3rd , 2021</h2>
                    <p>Once the registrations are opened, fill out the team details through the registration form and download the sample proposal structure via www.hackX.lk</p>
                </div>

                <div className={selectedIndex == 1 ? "section-content active" : "section-content"}>
                    <h1>Proposal submission</h1>
                    <h2>July 13th - August 3rd , 2021</h2>
                    <p>The proposals prepared according to the sample structure provided should be submitted via www.hackx.lk.</p>
                </div>

                <div className={selectedIndex == 2 ? "section-content active" : "section-content"}>
                    <h1>hackX Initial Ideation</h1>
                    <h2>July 13th - August 3rd , 2021</h2>
                    <h2>--Multimedia Room, Department of Industrial Management, University of Kelaniya</h2>
                    <p>30 teams with the most innovative ideas will be selected after the initial screening process. Each team will get 5 minutes to pitch their ideas infront of a distinguished panel of judges. The top 12 teams will compete in hackX 2022  finals.</p>
                </div>

                <div className={selectedIndex == 3 ? "section-content active" : "section-content"}>
                    <h1>designX</h1>
                    <h2>July 13th - August 3rd , 2021</h2>
                    <h2>--Via Zoom</h2>
                    <p>4 webinar sessions will be conducted to guide the finalists enhancing their skills.</p>
                </div>

                <div className={selectedIndex == 4 ? "section-content active" : "section-content"}>
                    <h1>hackX 2022: Finals</h1>
                    <h2>July 13th - August 3rd , 2021</h2>
                    <h2>--Ideamart Auditorium, Dialog Axiata </h2>
                    <p>This will be the final platform for the contestants to showcase their four-week perfected innovation. 12 finalists selected from ideaX and 3 finalists selected from Ideasprint will cross swords for the grand prize.</p>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;