import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import LeftSideNav from '../../SharedComponents/LeftSideNav/LeftSideNav';
import RightSideNav from '../../SharedComponents/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import News from './News';

const Home = () => {
    const newses=useLoaderData()
    console.log(newses)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className='grid md:grid-cols-4 gap-5'>
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 '>
                 {
                    newses.map(news=><News news={news}></News>)
                 }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;