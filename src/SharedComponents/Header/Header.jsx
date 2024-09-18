import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div >
            <img className='mx-auto' src={logo} alt="" />
            <div className="text-center py-3">
                <p className=''>Journalism Without Fear or Favour</p>
                <p className='text-xl '>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;