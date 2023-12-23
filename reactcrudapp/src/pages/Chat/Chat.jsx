import React from 'react';
import UserSection from '../../components/usersSection/UsersSection';
import MessageSection from '../../components/messageSection/MessageSection';
import Sidebar from '../../components/sidebar/sidebar';
import { baseUrl } from '../../core';

const Chat = () => {
    return (
        <div className=' text-white h-screen  bg-black'>
            <div className='flex max-w-[85rem] mx-auto  h-full '>
                <div className='border  w-[22%] text-white'>
                    <Sidebar />
                </div>
                <UserSection />
                <MessageSection />
            </div>
        </div>
    );
}

export default Chat;
