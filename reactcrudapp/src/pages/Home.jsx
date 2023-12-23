import React, { useState, useEffect, useRef } from 'react';
import Postcard from '../components/postcard/postcard';
import axios from 'axios'
import prof from '../../src/images/my img.png'
import { baseUrl } from '../core';
import Sidebar from '../components/sidebar/sidebar';
import RightSidebar from '../components/rightSidebar/rightSidebar';

const Home = () => {

    const [Posts, setPosts] = useState([])
    const [textArea, setTextArea] = useState('');
    const showDummyDivBelowTextArea = () => {

    }
    const textAreaRef = useRef(null);
    const handleChange = (event) => {
        setTextArea(event.target.value);
    };

    const autoInreaseSize = () => {
        // const textarea = document.getElementById('autoExpandTextarea');
        textAreaRef.current.style.height = 'auto'; // Reset height to auto to correctly calculate new height
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }

    const readPost = async (e) => {
        // console.log("location: ", location);
        try {
            // console.log(postHeadingRef.current.value)
            // console.log(postDetailsRef.current.value)

            const getPost = await axios.get(`${baseUrl}/api/v1/posts`, {
                withCredentials: true
            })

            setPosts(getPost.data)
            console.log(getPost.data);


        } catch (error) {
            // handle error
            console.log(error);

        }
    }

    useEffect(() => {


        // const controller = new AbortController();


        readPost()

        // if (textAreaRef.current) {
        // Step 3: Set the textarea height to its scrollHeight
        autoInreaseSize()
        //   }

        // return () => {
        //   // cleanup function
        //   controller.abort();
        // };
    }, [textArea]);

    return (
        <div className='flex justify-center bg-black'>
            <div className='flex h-screen max-w-[85rem]'>
                <div className='h-full bg-black w-[22%] text-white'>
                    <Sidebar />
                </div>
                <div className='flex flex-col bg-black border border-y-0 border-l-[#1f2124] border-r-[#1f2124] w-2/4'>

                    <div className=' flex justify-center space-x-2 pt-4 pb-4 w-full border border-[#1f2124] '>
                        <div className="w-11">
                            <img src={prof} className="  rounded-full" />
                        </div>
                        <div className=' w-[80%] '>
                            <div className=' w-full '>
                                <textarea
                                    rows='2'
                                    // value={textArea}
                                    placeholder='What is happening ?!'
                                    ref={textAreaRef}
                                    className='placeholder:text-xl pb-1 outline-none w-full  resize-none bg-black text-white '
                                    onChange={handleChange}
                                    onClick={showDummyDivBelowTextArea}
                                >
                                </textarea>
                                {/* <div className='absolute top-1/2 border left-2 transform  -translate-y-1/2 pointer-events-none text-white'>
                                What is happening ?!
                            </div> */}
                                <div>

                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        {Posts.map((eachpost, index) => {
                            return <Postcard key={index} postDetails={eachpost} />
                        })}
                    </div>
                </div>
                <div className='flex flex-col items-center bg-black w-[28%] space-y-4'>
                    <RightSidebar />
                </div>
            </div>
        </div>


    );
}

export default Home;
