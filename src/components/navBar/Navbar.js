import React, { useContext } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import Context from "../../Context";
const Navbar = () => {
    // this is for ignoring the eslint warning in the whole file/here it is the function
    /* eslint-disable */
    const { element, setElement, setIsActive, isActive } = useContext(Context)
    const setInitialState = () => {
        if (isActive === true) {
            setElement(["Home", "Logout", "searchBar"])
        }
        else {
            setElement(["Home", "Add Product", "Signin", "searchBar"])
        }
    }
    return (
        <div className="container-fluid py-0" style={{ backgroundColor: "#e3f2fd" }} id='navbar-div' >
            <nav className="navbar row d-plex">
                <div className="col-4">
                    <Link to="/">
                        <span className="fa-solid fa-cart-shopping me-3" onClick={setInitialState}></span>
                        <span className="navbar-brand" onClick={setInitialState}>upGrad E-Shop</span>
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    {
                        element.map((e) => {
                            if (e === 'searchBar') {
                                return (
                                    <form className="d-flex" role="search">
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" id={e} />
                                    </form>
                                )
                            }
                        })
                    }
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center" id="button">
                    {
                        element.map((e) => {

                            if (e === 'Signin') {
                                return (
                                    <Link to="/login">
                                        <button className="btn btn-danger" type="button" onClick={() => {
                                            setElement(["login", "Sign up"])
                                        }}>Signin</button>
                                    </Link>

                                )
                            }
                            else if (e === 'Logout') {
                                return (
                                    <Link to='/'>
                                        <button className="btn btn-danger" type="button" onClick={() => {
                                            setIsActive(false);
                                            setElement(["Home", "Add Product", "Signin", "searchBar"])
                                        }}>{e}</button>
                                    </Link>

                                )
                            }
                            else if (e !== 'searchBar') {
                                if (e === 'Sign up') {
                                    return (
                                        <Link to="/signup">
                                            <span className="me-4 align-self-center" key={e} onClick={() => {
                                                setElement(["login", "Sign up"])
                                            }}>{e}</span>
                                        </Link>
                                    )
                                }
                                else if (e === 'login') {
                                    return (
                                        <Link to="/login">
                                            <span className="me-4 align-self-center" key={e} onClick={() => {
                                                setElement(["login", "Sign up"])
                                            }}>{e}</span>
                                        </Link>
                                    )
                                }
                                else if (e === 'Home') {
                                    return (
                                        isActive === false ? (
                                            <React.Fragment>
                                                <Link to="/login">
                                                    <span className="me-4 align-self-center" key={e} onClick={() => {
                                                        setElement(['Logout'])
                                                    }}>Home</span>
                                                </Link>
                                            </React.Fragment>
                                        ) : (<React.Fragment>
                                            <Link to="/productsPage">
                                                <span className="me-4 align-self-center" key={e} onClick={() => {
                                                    setElement(['Logout'])
                                                }}>Home</span>
                                            </Link>
                                        </React.Fragment>)
                                    )
                                }
                                return (
                                    <span className="me-4 align-self-center" key={e} >{e}</span>
                                )
                            }
                        })
                    }
                </div>
            </nav>
        </div>
    )
}
export default Navbar;