
import { useState, useRef, useEffect } from "react";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from 'react-icons/ai'
import { CiViewBoard } from 'react-icons/ci'
import prof from '../../images/my img.png'
import Modal from '../modal/modal'
import axios from "axios";

const Postcard = ({ postDetails, verifydelPost, inpeditPost }) => {

  // const postidUpdateRef = useRef(null);
  // const postidDeletesRef = useRef(null);

  //  postidUpdateRef = postDetails?.id
  //  postidDeletesRef = postDetails?.id

  //  console.log(postDetails?.id)
  //  console.log(postDetails?.id)

  const eachpostID = postDetails?._id



  return (
    <div className="flex border border-x-0 border-t-[#1f2124] border-b-[#1f2124] bg-black text-white justify-center w-full rounded overflow-hidden shadow-lg  ">
      <div className="flex m-4 space-x-2">
        <div className="w-11">
          <img src={prof} className="  rounded-full" />
        </div>
        <div className="flex flex-col w-[34rem] ">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <h1 className="font-bold">Muhammad Usman</h1>
              <span className="flex text-[#575b5f] ">
                <h4 className="mr-2">uk@gmail.com</h4>.<span className="ml-2">time</span>
              </span>
            </div>
            <div className="flex items-center ml-2 mr-2 text-lg">
              <BsThreeDots />
            </div>
          </div>
          <div className="mb-2">
            <p className=" text-base  break-words">{postDetails?.Desc}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <button><BiMessageRounded className="text-xl" /></button>
              <span>20k</span>
            </div>
            <div className="flex">
              <button><BiRepost className="text-2xl" /></button>
              <span>6k</span>
            </div>
            <div className="flex">
              <button><AiOutlineHeart className="text-xl" /></button>
              <span>80k</span>
            </div>
            <div className="flex">
              <button><CiViewBoard className="text-xl" /></button>
              <span>100k</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end space-x-4 p-5 pt-0">
        <button onClick={() => { inpeditPost(eachpostID) }} className="p-2 font-semibold bg-white hover:text-white text-green-600 hover:bg-green-600"><FaMarker /></button>
        <button onClick={() => { verifydelPost(eachpostID) }} className="p-2 font-semibold bg-white hover:text-white  text-red-600 hover:bg-red-600"><FaTrashCan /></button>
      </div> */}

    </div>

  );
};


export default Postcard;
