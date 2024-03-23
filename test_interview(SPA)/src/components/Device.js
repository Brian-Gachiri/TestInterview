import {useDispatch} from "react-redux";
import {addToCart} from "../store/CartSlice";


const Device = ({device}) => {
    const image = 'https://picsum.photos/200/300?random='+device.id.toString();
    const dispatch = useDispatch();

    function addCart(){
        dispatch(addToCart(device))
    }
    return (
        <div className="col-lg-6 my-2">
            <div className="card mb-3 px-2 pt-2">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} alt={device.name} className="img-fluid rounded-start h-100" style={{objectFit:"cover"}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="text text-warning">{device.name}</h4>
                            <hr></hr>
                            <p className="text mb-2">
                                <b>Ram:</b> {device.ram}
                            </p>
                            <p className="text mt-0 pt-0 mb-2"><b>USB Ports:</b> {device.usb_ports}</p>
                            <p className="text mt-0 pt-0 mb-2"><b>Storage:</b> {device.storage}</p>
                            <p className="text mt-0 pt-0 mb-2"><b>Graphics Card:</b> {device.graphics_card}</p>
                            <p className="text mt-0 pt-0 mb-2"><b>Power System:</b> {device.power_system}</p>
                            <p className="text mt-0 pt-0 mb-2"><b>Weight:</b> {device.weight}</p>
                            <p className="text mt-0 pt-0 mb-2"><b>CPU:</b> {device.cpu}</p>

                            <div className={'d-flex flex-row justify-content-end mt-5'}>
                                <button className={'btn btn-outline-dark w-50'} onClick={addCart}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Device