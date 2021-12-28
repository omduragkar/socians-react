import React, { useState } from 'react'
import Cards from '../cards/Cards';
import Postsall from '../posts/Postsall';
import ProCards from '../profilecards/ProCards';
import "./sh.css"
const Switcherhome = (props) => {
    const [tabs, setTabs] = useState({});
    const clicktab = (e, fun)=>{
        e.preventDefault();
        // console.log(e.target.value)
        console.log(fun)
        setTabs({[fun]:true})
    }
    const clicktaboff = (e, fun)=>{
        e.preventDefault();
        setTabs({});
    }
    return (
        <div className='w-100'>
            <div className='divtab'>
                {tabs.trp?
                        <button className='btn btn-success mx-2 my-2' onClick={(e)=>{clicktaboff(e, "trp")}} value={"trp"}>Trending Profile</button>
                    :
                    <button className='btn btn-dark mx-2 my-2' onClick={(e)=>{clicktab(e, "trp")}} >Trending Profile</button>
                }
                {tabs.tpo?
                    <button className='btn btn-light mx-2 my-2' onClick={(e)=>{clicktaboff(e, "tpo")}} value={"tpo"}>Trending Posts</button>
                    :
                    <button className='btn btn-dark mx-2 my-2' onClick={(e)=>{clicktab(e, "tpo")}} >Trending Posts</button>
                }
                {tabs.wcud?
                    <button className='btn btn-primary mx-2 my-2' onClick={(e)=>{clicktaboff(e, "wcud")}} value={"wcud"}>What can you do?</button>
                    :
                    <button className='btn btn-dark mx-2 my-2' onClick={(e)=>{clicktab(e, "wcud")}} >What can you do?</button>
                }
            </div>
            <div>
                {tabs.trp?
                    props.trp.map((v)=> <ProCards content={v}/>)
                    :
                    <></>
                }
                {tabs.tpo?
                    props.tpo.map((v)=>{
                        return <Postsall content={v}/>
                    })
                        
                    :
                   <></>
                }
                {tabs.wcud?
                    props.wcud.map((v)=><Cards content={v}/>)
                    :
                    <></>
                }
                {
                    JSON.stringify(tabs)=="{}"?
                    props.tpo.map((v)=>{
                        return <Postsall content={v}/>
                    })
                    :<></>
                }
            </div>
        </div>
    )
}

export default Switcherhome
