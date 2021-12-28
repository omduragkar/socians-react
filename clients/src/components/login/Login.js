import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className='container-fluid mx-auto my-5 w-50'>
            <h1 className='my-3 text-center'>Login</h1>
            <div className="form-group">
                <label className="form-label mt-4">Email</label>
                <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput bg-dark">Email</label>
                </div>
                <label className="form-label mt-4">Password</label>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>
                <button type="button" class="btn btn-primary btn-md my-4">Login</button>
                <Link className='mx-4' to="/forgotpassword">Forgot password?</Link>
                <hr/>
                <div className='mx-auto text-center w-50'>
                    <Link to="/user/register" type="button" class="btn btn-dark btn-md w-50 text-bolder">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
