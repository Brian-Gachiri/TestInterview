import {Link} from "react-router-dom";
import Logo from "../images/logo.png"
import {useSelector} from "react-redux";

const Nav = () => {
    const cart = useSelector((state) => state.cart.cart)

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-transparent pt-3'>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    Device Hub
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <span className={'d-none d-lg-block'}>Home</span>
                                <span className={'d-lg-none'}>Home</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="btn btn-main" to="/devices">Devices</Link>
                        </li>
                        <li>
                            <Link type="button" className="btn btn-light position-relative p-1 me-3" to={'/cart'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                {cart.length}
                                    <span className="visually-hidden">Cart Items</span>
                              </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Nav