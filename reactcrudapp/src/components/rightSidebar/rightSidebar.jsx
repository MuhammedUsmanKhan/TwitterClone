import axios from 'axios';
import React, { useContext } from 'react';
import { GoHomeFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import { GlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

const RightSidebar = () => {

    const baseUrl = 'http://localhost:3002'

    const { state, dispatch } = useContext(GlobalContext);

    const logOutHandler = async () => {

        const resp = await axios.post(`${baseUrl}/api/v1/logout`, {}, {
            withCredentials: true
        })
        dispatch({
            type: "USER_LOGOUT"
        });
        console.log(resp.message)

    }

    return (
        <>
            <div className='p-2 pb-0 pl-0 pr-0 w-full'>
                <div className='flex justify-center  relative w-full'>
                    <input type="text" placeholder='Search' className='p-2 text-white pl-14 border peer border-[#202327] focus:border-[#13669e] outline-none  placeholder:text-[#757575] bg-[#202327] w-[86%] rounded-full' name="" id="" />
                    <FaSearch className='absolute text-[#757575] peer-focus:text-[#13669e] left-12 top-3' />
                </div>
            </div>
            <div className='flex flex-col space-y-2 justify-center p-4 text-white rounded-xl bg-[#202327] w-[86%]'>
                <h1 className='font-bold text-xl'>Subscribe to Premium</h1>
                <p>
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </p>
                <div>
                    <button className='bg-[#1d9bf0] p-4 py-1 rounded-3xl font-semibold'>Subscribe</button>
                </div>
            </div>
            <div className='flex flex-col space-y-2 justify-center p-4 text-white rounded-xl bg-[#202327] w-[86%]'>
                <h1 className='font-bold text-xl'>Trends for you</h1>
                <div className='w-full'>
                    <div className='flex justify-between items-end'>
                        <p className='text-[#61666b]'>
                            <span className='text-sm '>Entertainment</span>.<span className='text-sm'>Trending</span>
                        </p>
                        <div><BsThreeDots /></div>
                    </div>
                    <h2 className='font-bold'>The Flash</h2>
                    <span className='text-sm text-[#61666b]'>1,857 <span>posts</span></span>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-end'>
                        <p className='text-[#61666b]'>
                            <span className='text-sm '>Entertainment</span>.<span className='text-sm'>Trending</span>
                        </p>
                        <div><BsThreeDots /></div>
                    </div>
                    <h2 className='font-bold'>The Flash</h2>
                    <span className='text-sm text-[#61666b]'>1,857 <span>posts</span></span>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-end'>
                        <p className='text-[#61666b]'>
                            <span className='text-sm '>Entertainment</span>.<span className='text-sm'>Trending</span>
                        </p>
                        <div><BsThreeDots /></div>
                    </div>
                    <h2 className='font-bold'>The Flash</h2>
                    <span className='text-sm text-[#61666b]'>1,857 <span>posts</span></span>
                </div>
            </div>
        </>

    );
}

export default RightSidebar;