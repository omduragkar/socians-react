import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='container-fluid mx-auto my-5 w-50'>
            <h1 className='my-3 text-center'>Register</h1>
            <div className="form-group">
                <label className="form-label mt-4">Name</label>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputName" placeholder="John Doe"/>
                <label for="floatingInput bg-dark">Name</label>
                </div>
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
                <label className="form-label mt-4">Confirm Password</label>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"/>
                <label for="floatingPassword">Password</label>
                </div>
                <button type="button" class="btn btn-primary btn-md my-4">Signup</button>
                <Link className='mx-4' to="/user/login">Already Register?</Link>
                <hr/>
                <div className='mx-auto text-center w-50'>
                    <Link to="/user/login" type="button" class="btn btn-dark btn-md w-50 text-bolder">Login</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Register
