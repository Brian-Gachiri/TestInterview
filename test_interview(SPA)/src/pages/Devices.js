import {useEffect} from "react";
import Device from "../components/Device";
import Search from "../components/Search";
import {useDispatch, useSelector} from "react-redux";
import {fetchDevices} from "../store/DeviceActions";
import emptyStateImage from "../images/art.svg";


const Devices = () => {

    const dispatch = useDispatch();
    const devices = useSelector((state) => state.devices.deviceList)
    const loading = useSelector((state) => state.devices.loading);
    const error = useSelector((state) => state.devices.error);

    useEffect(() => {
        dispatch(fetchDevices());
    }, []);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={'container'}>
            <h1 className={'text-center'}>Devices</h1>
            <Search />
            <div className={'row justify-content-center mt-3'}>

                {Object.entries(devices).length === 0 || devices.results.length === 0 ? (
                    <>
                        <img src={emptyStateImage} alt='Empty State' className='img-fluid w-50'/>
                        <p className='text-center fw-bold'>There are no Devices available.</p>
                    </>
                ) : devices.results.map((device) => (<Device device={device} key={device.id}></Device>))}
            </div>
        </div>
    )
}

export default Devices