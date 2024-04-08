import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../img/logo.png';

export default function Footer() {
  return (
    <footer className='bg-black flex flex-col items-center p-5 mt-1'>
        <Link to = "/"><img src={logo} alt='img' className='h-20 w-auto' /></Link>
        <p className='text-red-600 border-t w-11/12 text-center mt-2'>Zemes&copy;. All rights reserved.</p>
    </footer>
  )
}