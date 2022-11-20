import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faSlack
} from "@fortawesome/free-brands-svg-icons";

function Club() {
  const { clubId } = useParams();
  return (
    <div>
      <div className ="grid grid-flow-row h-60 bg-gradient-to-r from-gray-900 to-black-900"> 
        <h1 className="text-white text-[60px] font-inter font-[600] ml-5 row-span-1 mt-.5"> 
          Void Tech
        </h1>
        <p className="text-white text-[20px] font-inter font-[500] ml-5 row-span-5">
          Preview description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua.
        </p>
        <div className = "row-span-1 my-5 ml-5">
          <button className="btn w-[9rem] text-white bg-primary mr-3 text-lg">Apply</button>
          <button className="btn w-[9rem] text-black bg-white mr-3 text-lg">Website </button>
        </div>
      </div>
    <div className="grid grid-flow-col gap-8 h-screen ml-5 mt-12">
      <div className="grid grid-flow-row col-span-8 h-2/5">
        <div className = "font-inter text-2xl font-medium row-span-1"> Tags:</div>
        <div className = "row-span-1 my-5">
          <button className="btn btn-circle w-1/6 text-black bg-tertiary mr-3 hover:bg-sky-100">Technology</button>
          <button className="btn btn-circle w-1/6 text-black bg-tertiary mr-3 hover:bg-sky-100">Consulting</button>
          <button className="btn btn-circle w-1/6 text-black bg-tertiary mr-3 hover:bg-sky-100">Startup</button>
          <button className="btn btn-circle w-1/6 text-black bg-tertiary mr-3 hover:bg-sky-100">Design</button>
        </div>
        <div className = "row-span-1 font-medium text-2xl"> Description:</div>
        <p className = "rows-span-5 max-w-fit mt-4"> 
          VOID Tech gives members real-world software development experience through real-world projects. We bring together student developers, designers, and Product Managers to partner up in order to create beautiful, functional websites and applications. <br></br>
          We set up students for success by creating cross-functional teams that will allow them to explore their design, development, and management abilities while learning about the process of developing a functional application that solves a real-world problem. Students will have to undergo a development process that ranges from brainstorming, to development, then testing and finally, deployment. We also host multiple social and professional development events throughout the year that will allow you to make lifelong friends and connections!
        </p>
      </div>
      <div className="col-span-7">
        <h1 className="font-inter font-medium text-2xl"> 
          Photos:
        </h1>
        <div className="grid grid-flow-col gap-6 h-[200px] pt-3 px-2">
           <div className="col-span-6 outline">

           </div>
           <div className="grid grid-flow-row col-span-5 gap-6 pr-5">
              <div className="row-span-1 outline">

              </div>
              <div className="row-span-1 outline">

              </div>
           </div>
        </div>
        <div className="row-span-1 text-right pr-6 text-blue-400 mt-1">
            See more photos
        </div>
        <hr className="my-2"/>
        <div>
          <h1 className="font-inter font-medium text-2xl"> 
          Cost
        </h1>
        <h1 className="font-inter text-med mt-3"> 
          $15 per year dues
        </h1>
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-medium text-2xl"> 
          Meeting Times
        </h1>
        <h1 className="font-inter text-med mt-3"> 
          Every Sunday: 3:30 to 5:30 PM
        </h1>
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-medium text-2xl"> 
          Contact
        </h1>
        <h1 className="font-inter text-med mt-3"> 
          void@voidtech.com
        </h1>
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-medium text-2xl"> 
          Socials
        </h1>
        <div className="mt-3">
          <FontAwesomeIcon className="text-4xl pr-6" icon={faFacebook} />
          <FontAwesomeIcon className = "text-4xl pr-6" icon={faSquareInstagram}/>
          <FontAwesomeIcon className = "text-4xl" icon={faSlack}/>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Club;
