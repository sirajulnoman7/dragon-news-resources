import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h3 className="text-2xl font-bold">All Category </h3>
            <div  className='space-y-3'>
                {
                  categories.map(category=><NavLink to={`/category/${category.id}`}
                    className={'block p-2 '}
                    key={category.id}
                  
                  >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;