import IconText from '../IconText';
import Paragraph from '../Paragraph';

export default function EventDetails() {
    return (
        // <div className='bg-homeBg1 flex justify-center items-center'>
        <div className="text-left bg-gray-dark p-5 rounded-xl mx-2 md:mx-0">
            <div className='text-center text-white uppercase text-lg font-bold pb-5'>HACKX 2022: FINALS</div>
            <IconText type="time" details="November 20th, 2022" />
            <a href="https://g.page/ideamartLK?share" target={"_blank"}>
                <IconText type="location" details="Ideamart Auditorium, Dialog Axiata" />
            </a>
            <Paragraph color="text-white" text={"This will be the final platform for the contestants to showcase their four-week perfected innovation. 12 finalists selected from ideaX and 3 finalists selected from Ideasprint will cross swords for the grand prize."} />
        </div>
        // </div>
    )
}
