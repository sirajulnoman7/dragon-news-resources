import React from 'react';
import { Link } from 'react-router-dom';

const News = ({news}) => {
    const {image_url,title,_id,details}=news
    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <img className='' src={image_url} alt="" />
                {
                    details.length>200 ?
                    <p>{details.slice(0,200)}......
                    <Link className='mr-3 text-blue-500 font-semibold' to={`news/${_id}`}>read more</Link>
                    </p>
                    :
                    <p>{details}</p>
            
                }
            </div>
        </div>
    );
};

export default News;