import Button from '../Button';
import Layout from '../Layout';
import './index.css'
import HomeLeft from './Left';
import HomeRight from './Right';

function Home() {
    return (
        <>

            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>

            <Layout bgColorClassName={"bg-homeBg1"}>
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full  pt-20">
                    <div className='flex justify-center items-center'>
                        <HomeLeft />
                    </div>
                    <div className='flex justify-center items-center'>
                        <HomeRight />
                    </div>
                </div>
            </Layout>
        </>

    );
}

export default Home;