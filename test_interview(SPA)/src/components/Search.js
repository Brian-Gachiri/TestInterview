import {useDispatch} from "react-redux";
import {useState} from "react";
import {fetchDevices} from "../store/DeviceActions";

const Search = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        search: "",
    })
    const handleSubmit = () => {
        if (formData.search === ""){
            dispatch(fetchDevices())
        }else{
            dispatch(fetchDevices(
                {
                    search: formData.search
                }
            ))
        }
    }
    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-lg-10">
                <div className="input-group mb-3">
                    <input onChange={handleChange} type="text" name={'search'} value={formData.search} className="form-control form-control-lg" placeholder="Search for device"
                           aria-label="Search for article" aria-describedby="button-addon2" style={{
                        fontSize:'16px',
                        height:'20px'
                    }}/>
                    <button className="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmit}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search