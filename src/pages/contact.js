import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import car from '../img/car.png'

export default function Contact() {
  const [formModal, setformModal] = useState(false);

  function formModalOpen(){
    document.body.style.overflow = "hidden";
    setformModal(true);
  }

  function formModalClose(){
    document.body.style.overflow = "scroll";
    setformModal(false);
  }

  return (
    <>
    <main>
      <div className='md:flex md:flex-col justify-center lg:flex lg:flex-row justify-around items-center bg-gray-100	p-10'>
        <div>
          <img src={car} alt="img" className='h-96' />
        </div>
        <div>
          <h1 className='text-4xl'>ЗАПИШИТЕСЬ НА ПРИЁМ УЖЕ СЕГОДНЯ</h1>
          <h1 className='text-red-700	font-extrabold mt-2 text-4xl'>ЗВОНИТЕ: +7 (911) 096-82-35</h1>
          <p className='mt-3 text-gray-600 text-lg'>Ваш специалист по ремонту и техническому обслуживанию автомобилей</p>
          <div className='mt-7'>
            <button onClick={formModalOpen} className='py-3 px-10 bg-red-600 text-slate-100 font-bold hover:bg-gray-900'>ЗАПИШИТЕСЬ НА ПРИЁМ</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col jusify-center items-center lg:flex lg:flex-row justify-around items-center bg-red-600 p-16 gap-8'>
        <div className='flex flex-col text-center lg:flex lg:flex-row justify-center	items-center w-full'>
          <svg className='h-12 fill-white mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <div className='flex flex-col'>
            <p className='text-slate-300 text-xl'>Адрес:</p>
            <p className='text-slate-300 text-xl font-bold'>Придорожная аллея, 7, Санкт-Петербург</p>
            <p className='text-slate-300 text-xl font-bold'>Учительская улица, 3, Санкт-Петербург</p>
          </div>
        </div>
        <div className='flex flex-col text-center lg:flex lg:flex-row justify-center	items-center w-full'>
          <svg className='h-12 fill-white mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <div className='flex flex-col'>
            <p className='text-slate-300 text-xl'>Телефоны:</p>
            <p className='text-slate-300 text-xl font-bold'>+7 (911) 096-82-35; +7 (981) 105-40-63</p>
          </div>
        </div>
        <div className='flex flex-col text-center lg:flex lg:flex-row justify-center	items-center w-full'>
          <svg className='h-12 fill-white mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <div className='flex flex-col'>
            <p className='text-slate-300 text-xl'>Время работы:</p>
            <p className='text-slate-300 text-xl font-bold'>Понедельник-Пятница: 9:00 - 19:00</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <YMaps width='100%'>
          <Map height='650px' width='100%' defaultState={{ center: [60.045730, 30.361229], zoom: 14 }}>
            <Placemark geometry={[60.056544, 30.349034]} />
            <Placemark geometry={[60.035175, 30.384185]} />
          </Map>
        </YMaps>
      </div>
    </main>
    {
      formModal
        ? <Modal closeModal={formModalClose} />
        : ''
    }
    </>
  )
}


export function Modal({closeModal}) {
  function handleClick(e) {
    if (e.target.classList.contains('js-modal')) {
      closeModal();
    }
  }

  return(
    <div onClick={handleClick} data-testid="modal-out" className='js-modal fixed z-30 top-0 left-0 w-full h-full bg-black/75 flex justify-end'>
      <div data-testid="modal-body" className='w-full md:w-1/2 lg:w-1/4 bg-white h-full appear-animation'>
        <div className='flex justify-end'>
          <div data-testid="modal-cross" onClick={closeModal} className='bg-black h-8 w-8 flex justify-center items-center'>
            <svg className='h-6 fill-white font-light hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </div>
        </div>
        <div className='flex flex-col gap-4 p-10'>
          <h1 className='text-slate-400	text-xl font-semibold	'>Выберите услугу</h1>
          <div>
            <p className='text-slate-400'>Категории обслуживания</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" >--Любая--</option>
              <option value="" >Покупка машины</option>
              <option value="" >Профилактическое обслуживание</option>
              <option value="" >Полный ремонт</option>
              <option value="" >Тюнинг</option>
            </select>
          </div>
          <div>
            <p className='text-slate-400'>Услуга</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" >--Любая--</option>
              <option value="" >Ремонт и замена тормозов</option>
              <option value="" >Ремонт топливной системы</option>
              <option value="" >Мойка и детейлинг</option>
              <option value="" >Ремонт электрики</option>
            </select>
          </div>
          <div>
            <p className='text-slate-400'>Адрес</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" >--Любой--</option>
              <option value="" >Придорожная аллея, 7</option>
              <option value="" >Учительская улица, 3</option>
            </select>
          </div>
          <button className='bg-red-600 hover:bg-gray-900 p-3 text-white font-semibold'>Отправить</button>
        </div>
      </div>
    </div>
  )
}