import IconText from '../IconText';
import Paragraph from '../Paragraph';
import grandFinal from "../../assets/grandFinal.png"

export default function EventDetails() {
    return (
        // <div className='bg-homeBg1 flex justify-center items-center'>
        <div className="text-left bg-gray-dark p-5 rounded-xl mx-2 md:mx-0">
            <div className='flex justify-center items-center pb-10'>
                <img
                    src={grandFinal}
                    alt="ideaXLogo"
                    width={350}
                // height={300}
                />
            </div>
            {/* <div className='text-center text-white uppercase text-lg font-bold pb-5'>HACKX 2022: FINALS</div> */}
            {/* <IconText type="time" details="November 20th, 2022" />
            <a href="https://g.page/ideamartLK?share" target={"_blank"}>
                <IconText type="location" details="Ideamart Auditorium, Dialog Axiata" />
            </a> */}
            <p className='text-white font-bold text-center text-xl leading-normal'>THE GRAND FINALS OF HACKX 2022 WILL BE HELD ON THE <br />20TH OF NOVEMBER, 2022 <br />AT THE <a href="https://g.page/ideamartLK?share" target={"_blank"} className="font-extrabold underline">IDEAMART AUDITORIUM</a></p>

        </div>
        // </div>
    )
}
