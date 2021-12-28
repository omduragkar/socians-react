import React, { useState } from 'react'
import Cards from '../../components/cards/Cards';
import Postsall from '../../components/posts/Postsall';
import ProCards from '../../components/profilecards/ProCards';
import Switcherhome from '../../components/switcherhome/Switcherhome';
import "./home.css"
const Home = () => {
    const [login, setlogin] = useState(false);
    return (
        <>
            {login?
            <di>LoggedIn</di>
            :
            <div className='container-fluid m-auto'>
                <div className='switchtab text-center'>
                    <Switcherhome tpo={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]} trp={[2,2,2,2,2,2,2,2,2,2,2,2,2,2,]} wcud={[3,3,3,3,3,3,3,3,3,3,3]}/>
                </div>
                <div className='row container-fluid m-auto maincontdown'>
                    <div className='col-lg-3 trendprof'>
                        <h2 className='text-center m-auto py-3 my-3 sticky-top bg-dark mx-auto'>Trending Profiles</h2>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                        <ProCards/>
                    </div>
                    <div className='col-lg-6 col-md-8 trendprofmid'>
                        <h2 className='text-center m-auto py-3 my-3 sticky-top bg-dark'>Trending Posts</h2>    
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                        <Postsall/>
                    </div>
                    <div className='col-lg-3 col-md-4 text-center m-auto right3'>
                    <h2 className='text-center m-auto py-3 my-3 sticky-top bg-dark mx-auto'> What you can do?</h2>
                        <Cards title="make posts" headline="Add your thoughts and share with world" />
                        <Cards title="Connect Across Globe Easily" headline="Connect With peeps all across the globe" />
                        <Cards title="Make family Virtually" headline="Chat talk With peeps all across the globe" />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Home
