import BannerImage from "../images/art.svg";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 text-center order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center'>
                    <h1 className={'text-dark banner-heading'}>Get the <span className={'text-warning'}>best prices</span> for all your devices</h1>
                    <Link className={'btn btn-warning btn-lg w-50'} to='/devices'>See Devices</Link>
                </div>
                <div className='col-lg-5 order-1 order-lg-2'>
                    <img src={BannerImage} alt='Banner' className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default Home