import { useState, useRef, useEffect } from "react";
import Modal from '../../components/modal/modal'
import axios from 'axios'
import Createcard from '../../components/createcard/card'
import Postcard from '../../components/postcard/postcard'
import Search from "../../components/searchpost/searchpost";
import Sidebar from '../../components/sidebar/sidebar';
import RightSidebar from '../../components/rightSidebar/rightSidebar';
import Userprof from '../../components/userprof/Userprof';
import prof from '../../images/my img.png'
import { baseUrl } from "../../core";
const Profile = () => {

    const [posts, setPosts] = useState([]);
    const [postid, setIspostid] = useState(null);
    const [isSearchdetails, setiIsSearchdetails] = useState(null)
    const [isDelete, setIsDelete] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [Message, setIsMessage] = useState(null);
    const [isRelevantPosts, SetRelevantPosts] = useState(null);
    const edittedpostHeadingRef = useRef(null);
    const edittedpostDetailsRef = useRef(null);
    const searchInputRef = useRef(null);

    const deleteopenModal = () => {
        setIsDelete(true);
    }

    const deletecloseModal = () => {
        setIsDelete(false);
    }

    const createopenModal = () => {
        setIsCreate(true);
    }

    const createcloseModal = () => {
        setIsCreate(false);
    }

    const updateopenModal = () => {
        setIsUpdate(true);
    }

    const updatecloseModal = () => {
        setIsUpdate(false);
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


    const deletePost = async (postid) => {

        try {

            const delPost = await axios.delete(`${baseUrl}/api/v1/post/delete/${postid}`, {
                withCredentials: true
            })

            console.log(delPost);
            readPost();
            deletecloseModal()

        } catch (error) {
            // handle error
            console.log(error);

        }
    }

    const editPost = async (postid) => {

        console.log(edittedpostHeadingRef.current.value)
        console.log(edittedpostDetailsRef.current.value)
        console.log(postid)

        if (edittedpostHeadingRef.current.value.trim().length != 0 && edittedpostDetailsRef.current.value.trim().length != 0) {

            try {

                const editPost = await axios.put(`/api/v1/post/update/${postid}`, {
                    PostTitle: edittedpostHeadingRef.current.value,
                    Desc: edittedpostDetailsRef.current.value
                })

                console.log(editPost);
                readPost();
                updatecloseModal();

            } catch (error) {
                // handle error
                console.log(error);

            }
        }
        else {

            setIsMessage('Both the input fields must not be empty.')

            createopenModal()

        }


    }

    const verifydelPost = (eachpostID) => {
        console.log(eachpostID)
        const postID = eachpostID
        setIspostid(postID)
        deleteopenModal();
    }

    const inpeditPost = (eachpostID) => {
        console.log(eachpostID)
        const postID = eachpostID
        setIspostid(postID)
        updateopenModal();
    }

    useEffect(() => {


        // const controller = new AbortController();


        readPost()
        // return () => {
        //   // cleanup function
        //   controller.abort();
        // };
    }, []);

    const addNewPost = async (newPost) => {
        try {
            const response = await axios.post(`${baseUrl}/api/v1/post`, newPost, {
                withCredentials: true
            });
            console.log(response)
            // Update the state to include the new post
            const Message = response.data
            readPost();
            createopenModal();

        } catch (error) {
            console.error("Error adding new post: ", error);
        }
    };

    const searchHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(searchInputRef.current.value)
            // setIsLoading(true);
            setiIsSearchdetails(true)
            const response = await axios.get(`${baseUrl}/api/v1/search?q=${searchInputRef.current.value}`, {
                withCredentials: true
            });
            console.log(response.data);

            // setIsLoading(false);
            SetRelevantPosts([...response.data]);
        } catch (error) {
            console.log(error);
            // setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center bg-black">
            <div className='flex h-screen max-w-[85rem]'>
                <div className='h-full bg-black w-[22%] text-white'>
                    <Sidebar />
                </div>
                <div className='flex flex-col bg-black text-white border border-y-0 border-l-[#1f2124] border-r-[#1f2124] w-2/4'>
                    <Userprof />
                </div>
                <div className='flex flex-col items-center bg-black w-[28%] space-y-4'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default Profile;



{/* open it <div className=''> */ }
{/* <div className='flex justify-center text-4xl  p-4'>
                <h1 className=''>React ExpressServer Based CrudApp</h1>
            </div> */}
{/* open it <div className='container  mx-auto flex flex-col space-y-4'>
                <div className='flex justify-center '>
                    <Createcard createPost={addNewPost} createopenModal={createopenModal} setIsMessage={setIsMessage} />
                </div>
                <div className="flex relative justify-center p-4">
                    <input type="search" ref={searchInputRef} className="w-full p-2" name="" id="" />
                    <button onClick={searchHandler} className="absolute right-8 top-5 p-1">Search</button>
                </div>
                <div className='grid sm:grid-col-1 md:grid-cols-3  '>
                    {posts?.toReversed().map((eachpost, index) => {
                        return <Postcard key={index} postDetails={eachpost} inpeditPost={inpeditPost} verifydelPost={verifydelPost} />;
                    })}
                </div>
            </div> */}
{/* open it <Modal isDelete={isDelete} postid={postid} Message={Message} edittedpostHeadingRef={edittedpostHeadingRef} edittedpostDetailsRef={edittedpostDetailsRef} isUpdate={isUpdate} isCreate={isCreate} deletePost={deletePost} editPost={editPost} deletecloseModal={deletecloseModal} updatecloseModal={updatecloseModal} createcloseModal={createcloseModal}  > </Modal> */ }
{/* <Search isSearchdetails={isSearchdetails} setiIsSearchdetails={setiIsSearchdetails} >
                {isRelevantPosts?.map((eachpost, index) => {
                    return <Postcard key={index} postDetails={eachpost} inpeditPost={inpeditPost} verifydelPost={verifydelPost} />;
                })}
            </Search> */}
{/* <Search  /> */ }
{/* <Search isRelevantPosts={isRelevantPosts} isSearchdetails={isSearchdetails} setiIsSearchdetails={setiIsSearchdetails} inpeditPost={inpeditPost} verifydelPost={verifydelPost} />; */ }
{/* <Modal isCreate={isCreate} >
                <h1 className="text-2xl mb-4">Are you sure to Delete</h1>
            </Modal> */}
{/* open it <Search isSearchdetails={isSearchdetails} setiIsSearchdetails={setiIsSearchdetails} >
                {isRelevantPosts?.map((eachpost, index) => {
                    return <div><Postcard key={index} postDetails={eachpost} inpeditPost={inpeditPost} verifydelPost={verifydelPost} /></div>;
                })}
            </Search> */}
{/* </div > */ }