import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from "./data"
import HeadTile from '../HeadTitle';
import mascotWithTrophy from "../../assets/mascotWithTrophy.png"
import useWindowDimensions from '../../hook/getWindowDimensions';


function TimeLine() {
    const { width } = useWindowDimensions();

    const imgStyles = {
        display: "flex",
        justifyContent: width >= 1170 ? 'center' : 'start'
    }

    return (
        <div id="TIME-LINE" className='bg-homeBg1 pt-20'>
            <HeadTile title={"TIME LINE"} />
            {data.map((item) => (
                <VerticalTimeline lineColor="#ec9e23" key={item.id} layout="2-columns">
                    <VerticalTimelineElement
                        contentStyle={{ background: '#47AF73', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #47AF73' }}
                        date={item.duration}
                        iconStyle={{ background: '#47AF73', color: '#fff' }}
                        icon={item.icon}
                        position={item.id % 2 === 0 ? "right" : "left"}
                    >
                        <h2 style={{ color: "black" }}>{item.title}</h2>
                        <h4 style={{ color: "black" }}>{item.subTitle}</h4>
                        <p>{item.description}</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            ))}
            <div style={imgStyles}>
                <img
                    src={mascotWithTrophy}
                    alt="mascotWithTrophy"
                />
            </div>

        </div>
    );
}

export default TimeLine;