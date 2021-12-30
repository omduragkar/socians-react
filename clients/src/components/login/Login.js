import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { userLogin } from '../../redux/actions/userActions';
import Loading from '../loading/Loading';
const Login = () => {
    const history = useHistory();
    const user = useSelector(state => state.user)
    const [userInfo, setUserInfo] = useState({});
    const addInput = (e)=>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }
    const dispatch = useDispatch();
    const sub = (e)=>{
        e.preventDefault();
        console.log(userInfo);
        dispatch(userLogin(userInfo));
    }
    useEffect(() => {

        if(user.token && user.token.startsWith("Bearer"))
        {
            history.push("/");
        }
    }, [history, user])
    return (
        <div className='container-fluid mx-auto my-5 w-50'>
            <h1 className='my-3 text-center'>Login</h1>
            {user.loading?
                <div style={{"height":"30rem","margin":"100px 45%"}}>
                    <Loading/>
                </div>
            :
            
                
                <div className="form-group">
                    <label className="form-label mt-4">Email</label>
                    <div className="form-floating mb-3">
                    {
                        user.message?
                            <input type="email" name='email' value={userInfo.email || ""} onChange={(e)=>{addInput(e)}} className="form-control is-invalid" id="floatingInput" placeholder="name@example.com"/>
                    :

                        <input type="email" name='email' value={userInfo.email || ""} onChange={(e)=>{addInput(e)}} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    }
                    <label for="floatingInput bg-dark">Email</label>
                    </div>
                    <label className="form-label mt-4">Password</label>
                    <div className="form-floating">
                    {
                        user.message?
                            <input type="password" name='password' value={userInfo.password || ""} onChange={(e)=>{addInput(e)}} className="form-control is-invalid" id="floatingPassword" placeholder="Password"/>
                        :
                            <input type="password" name='password' value={userInfo.password || ""} onChange={(e)=>{addInput(e)}} className="form-control" id="floatingPassword" placeholder="Password"/>
                    }
                    <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" onClick={(e)=>{sub(e)}} class="btn btn-primary btn-md my-4">Login</button>
                    <Link className='mx-4' to="/forgotpassword">Forgot password?</Link>
                    <hr/>
                    <div className='mx-auto text-center w-50'>
                        <Link to="/user/register" type="button" class="btn btn-dark btn-md w-50 text-bolder">Signup</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login
