import IconText from '../IconText';
import Paragraph from '../Paragraph';

export default function EventDetails() {
    return (
        // <div className='bg-homeBg1 flex justify-center items-center'>
        <div className="text-left bg-gray-dark p-5 rounded-xl mx-2 md:mx-0">
            <div className='text-center text-white uppercase text-lg font-bold pb-5'>designX</div>
            <IconText type="time" details="18th OCT. - 18th NOV." />
            <IconText type="location" details="Via Zoom" />
            <Paragraph color="text-white" text={"4 webinar sessions will be conducted to guide the finalists enhancing their skills."} />
        </div>
        // </div>
    )
}
