import axios from 'axios';
import React, { useContext } from 'react';
import { GoHomeFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import prof from '../../images/my img.png'
import { FaXTwitter } from "react-icons/fa6";
import { GlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

const Sidebar = () => {

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
        <div className='flex  h-full justify-center border p-4 pl-0 pr-0  '>
            <div className='flex flex-col justify-between  items-baseline'>
                <div className=' flex flex-col space-y-8    '>
                    <div className='flex  w-40 justify-start'>
                        <button className='rounded-full '><FaXTwitter className='rounded-full hover:bg-white/60 text-3xl' /></button>
                    </div>
                    <ul className='space-y-8'>

                        <li>
                            <Link className='flex space-x-4 font-bold' to={`/`}>
                                <GoHomeFill className='text-3xl' /><span className='text-xl'>Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link className='flex space-x-4 ' to={`/`}>
                                <IoNotificationsOutline className='text-3xl' /><span className='text-xl'>Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='flex space-x-4 ' to={`/profile`}>
                                <FaRegUser className='text-3xl' /><span className='text-xl'>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='flex space-x-4 ' to={`/chat`}>
                                <BsChatDots className='text-3xl' /><span className='text-xl'>Lets Chat</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col  space-y-8'>
                    <div className='flex  w-full '>
                        <button className='bg-[#1d9bf0] p-4 w-11/12  font-bold rounded-full'>Post</button>
                    </div>
                    <div className='flex pr-2  space-x-2'>
                        <div className="w-11">
                            <img src={prof} className="  rounded-full" />
                        </div>
                        <div className=" flex items-center space-x-3">
                            <div className='flex flex-col'>
                                <h1 className="text-sm font-bold">Muhammad Usman</h1>
                                <span className="flex text-[#575b5f] mt-0 ">
                                    <h4 className="mr-2 text-sm">uk@gmail.com</h4>
                                </span>
                            </div>
                            <div>
                                <BsThreeDots />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Sidebar;
