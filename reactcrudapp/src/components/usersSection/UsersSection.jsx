import react from 'react';
import { CiSettings } from "react-icons/ci";
import { LuMailPlus } from "react-icons/lu";
import axios from 'axios';


// leftSection of Chat page

const UserSection = () => {

    // const baseUrl = 'http://localhost:3002'

    // const { state, dispatch } = useContext(GlobalContext);

    return (
        <>
            <div className='flex flex-col w-[28%] border '>
                <div className='flex justify-between p-4'>
                    <div className='text-2xl font-bold'>Messages</div>
                    <div className='flex items-center space-x-4 text-2xl'>
                        <CiSettings />
                        <LuMailPlus />
                    </div>
                </div>
                <div className='p-4'>
                    <div>
                        <div className='font-semibold text-xl'>Welcome to your Inbox!</div>
                        <div>Drop a line, share posts and more with private conversations between you and others on X.</div>
                    </div>
                    <button>Write a message</button>
                </div>
            </div>
        </>

    );
}

export default UserSection;