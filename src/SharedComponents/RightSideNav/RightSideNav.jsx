import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div >
            <div className="p-4 space-y-3 mb-5">
                <h2 className="text-2xl font-bold">Login with </h2>
                <div>
                    <button className="btn btn-outline w-full  text-sky-500  ">
                        <FaGoogle></FaGoogle>
                        Login with google
                    </button>
                </div>
                <div>
                    <button className="btn w-full btn-outline  ">
                        <FaGithub></FaGithub>
                        Login with github
                    </button>
                </div>
            </div>
            <div className="p-4 space-y-1 mb-5">
                <h2 className="text-2xl font-bold">Find Us On</h2>
                <div>
                    <a className='flex items-center p-2 text-lg gap-5 border border-black rounded-t-lg' href="">
                        <FaFacebook className='text-sky-500'></FaFacebook>
                        <span> Facebook</span>
                    </a>
                </div>
                <div>
                    <a className='flex items-center p-2 text-lg  gap-5 border border-black rounded-t-lg' href="">
                        <FaTwitter className='text-sky-500'></FaTwitter>
                        <span>Twitter</span>
                    </a>
                </div>
                <div>
                    <a className='flex items-center p-2 text-lg gap-5 border border-black rounded-t-lg' href="">
                        <FaInstagram className='text-red-400'></FaInstagram>
                        <span> Instagram</span>
                    </a>
                </div>

            </div>
            {/* Q zone */}

            <div className="p-4 space-y-2 mb-5">
                <h2 className="text-2xl font-bold">Q-Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                </div>
                <div>
                    <img src={qZone2} alt="" />
                </div>
                <div>
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;