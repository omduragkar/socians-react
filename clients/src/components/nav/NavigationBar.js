import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { userlogout } from '../../redux/actions/userActions';
import Loading from '../loading/Loading';
import "./nav.css"
const NavigationBar = () => {
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const logout = (e)=>{
        e.preventDefault();
        dispatch(userlogout());
        console.log("function called!")
    }
    useEffect(() => {
        if(user.token == "")
        {
            history.push("/user/login");
        }
    }, [history, user])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-auto">
                <Link className='navbar-brand nbrand' to = "/">Socians &reg; </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/user/posts">Post
                        <span className="visually-hidden">(current)</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Features</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Profiles</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">About</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Separated link</a>
                        </div>
                    </li> */}
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                {user.login?
                    <form className="d-flex">
                        <Link to = "/user/login" className="btn btn-outline-light my-2 my-sm-0 mx-1" >Notifications</Link>
                        {user.loading?
                            <Button className="btn my-2 my-sm-0 mx-2 disabled" ><Loading/></Button>
                            
                        :
                            <Button type="submit" className="btn my-2 my-sm-0 mx-2" onClick={(e)=>{logout(e)}} >Logout</Button>
                        }
                    </form>

                :
                    <form className="d-flex">
                        <Link to = "/user/login" className="btn btn-outline-light my-2 my-sm-0 mx-1" >Login</Link>
                        <Link to = "/user/register" className="btn btn-outline-secondary my-2 my-sm-0 mx-2" >Signup</Link>
                    </form>
                }
                </div>
            </div>
</nav>
    )
}

export default NavigationBar
