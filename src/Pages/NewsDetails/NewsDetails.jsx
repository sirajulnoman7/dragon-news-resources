import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import RightSideNav from '../../SharedComponents/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className='grid md:grid-cols-3'>
            <div className='col-span-2'>
                 <h3 className="text-2lx font-bold">Dragon News</h3>
                 <p>{id}</p>
            </div>
            <div>
              <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default NewsDetails;