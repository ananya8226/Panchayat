import CustomSlider from '../../components/CustomSlider';
import img21 from '../../../assets/img21.png';
import img22 from '../../../assets/img22.png';
import img23 from '../../../assets/img23.jpeg';
import img24 from '../../../assets/img24.png';
import '../../../styles/home.scss';
import HomeDiv1 from '../../components/HomeDiv1';
import HomeDiv2 from '../../components/HomeDiv2';
import HomeDiv3 from '../../components/HomeDiv3';
import HomeDiv4 from '../../components/HomeDiv4';
import HomeDiv5 from '../../components/HomeDiv5';

function Home() {

    const images = [
        img21, img23, img24, img22, 
    ];

    return (
        <div>
            <div className='home-div-img'>
                <div className='carousel-div'>
                    {/* <ImageCarousel images={images} indicatorDisplay="none" /> */}
                    <CustomSlider images={images} /> 
                </div>
            </div>

            <div className='home-body'>
                <h3>Aspirational Panchayat</h3>
                <HomeDiv1/>
                <HomeDiv2/>
                {/* <HomeDiv3/> */}
                <HomeDiv4/>
                <HomeDiv5/>
            </div>
        </div>

    )
}

export default Home

