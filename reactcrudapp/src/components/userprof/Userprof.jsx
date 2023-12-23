import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import prof from '../../images/my img.png'
import { baseUrl } from '../../core';

const userProf = () => {
    return (
        <div className='text-white'>
            <div className='pl-8 flex space-x-10 items-center pt-1 pb-1'>
                <div>
                    <FaArrowLeft />
                </div>
                <div>
                    <div className='font-bold text-lg'>User Name</div>
                    <div className='text-sm font-thin'>Posts</div>
                </div>
            </div>
            <div className='relative'>
                <div className='h-52 bg-[#333639]  overflow-hidden'>
                    <img src={prof} className='object-cover' alt="ff" />
                </div>
                <div className='flex justify-start absolute top-[7.5rem] p-4'>
                    <img className='rounded-full p-1 h-36 w-36  bg-black' src={prof} />
                </div>
                <div className='flex justify-end p-4'>
                    <button className='text-white rounded-3xl p-1 font-bold px-3 border-solid border-2'>Edit Profile</button>
                </div>
                <div className=''>

                    <div className='p-4'>
                        <div className='text-xl font-bold'>Username</div>
                        <div>userEmail</div>
                    </div>
                    <div className='p-4'>
                        <p>Bio</p>
                    </div>
                    <div className='p-4 pt-0 space-x-4'>
                        <span>location</span>
                        <span>Date of joining platform</span>
                    </div>
                    <div className='flex justify-evenly px-0  font-bold  '>
                        <button className='flex-1 group hover:bg-white/20 '><span className='inline-block p-2 px-0 h-full group-focus:border-b-4 group-focus:border-[#13669e]'>Post</span></button>
                        <button className='flex-1 group hover:bg-white/20 '><span className='inline-block p-2 px-0 h-full group-focus:border-b-4 group-focus:border-[#13669e]'>Replies</span></button>
                        <button className='flex-1 group hover:bg-white/20 '><span className='inline-block p-2 px-0 h-full group-focus:border-b-4 group-focus:border-[#13669e]'>Highlights</span></button>
                        <button className='flex-1 group hover:bg-white/20 '><span className='inline-block p-2 px-0 h-full group-focus:border-b-4 group-focus:border-[#13669e]'>Media</span></button>
                        <button className='flex-1 group hover:bg-white/20 '><span className='inline-block p-2 px-0 h-full group-focus:border-b-4 group-focus:border-[#13669e]'>Likes</span></button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default userProf;