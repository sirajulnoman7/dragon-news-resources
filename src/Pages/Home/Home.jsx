import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import LeftSideNav from '../../SharedComponents/LeftSideNav/LeftSideNav';
import RightSideNav from '../../SharedComponents/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className='grid md:grid-cols-4 gap-5'>
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border border-yellow-500'>
                    News coming soon..........!
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;