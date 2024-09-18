import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='flex gap-2'>
            <button className='btn btn-secondary'>Latest</button>
           <Marquee pauseOnHover={true} speed={100}>
           <Link className='mr-3' to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           <Link className='mr-3' to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           </Marquee>
        </div>
    );
};

export default BreakingNews;