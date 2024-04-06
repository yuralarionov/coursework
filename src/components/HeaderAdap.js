import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function HeaderAdap() {
    const [searchModal, setSearchModal] = useState(false);

    function searchModalOpen(){
        setSearchModal(true);
    }

    function searchModalClose(){
        setSearchModal(false);
    }

    return(
        <>
        <header className="w-[500px] flex flex-col jusyify-center items-center md:items-center bg-black gap-4 p-4 lg:hidden">
            <div className='flex flex-col justify-center items-center md:flex-row justify-center gap-10 text-white'>
                <Link to = "/" className='hover:text-red-500'>Главная</Link>
                <Link to = "/news" className='hover:text-red-500'>Новости</Link>
                <Link to = "/about" className='hover:text-red-500'>О компании</Link>
                <Link to = "/contact" className='hover:text-red-500'>Контакты</Link>
                <Link to = "/catalog" className='hover:text-red-500'>Каталог</Link>
                <Link to = "/services" className='hover:text-red-500'>Услуги</Link>
                <button onClick={searchModalOpen}>
                  <svg className='h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
                <Link to="/auth">
                <svg className='h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg>
                </Link>
            </div>
        </header>
        {
        searchModal
          ? <Modal closeModal={searchModalClose} />
          : ''
        }
        </>
    )
}

function Modal({closeModal}) {
    function handleClick(e) {
      if (e.target.classList.contains('js-modal')) {
        closeModal();
      }
    }
  
    return(
      <div onClick={handleClick} className='js-modal fixed z-10 top-0 left-0 w-full h-full bg-black opacity-85	flex justify-center items-center'>
        <div className='flex flex-row justify-center items-center gap-5'>
          <h1 className='text-slate-400 text-4xl font-bold'><input className='w-[200px] md:w-[330px] bg-black opacity-85 outline-none cursor-pointer' type="text" placeholder='Поиск...' /></h1>
          <svg className='h-8 fill-slate-400 hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
        <div onClick={closeModal} >
          <svg className='h-8 fill-slate-400 hover:fill-red-700 absolute top-10 right-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
      </div>
    )
}

