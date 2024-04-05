import React from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import car from '../img/car.png'

export default function About() {
  return (
    <main>
      <div className='p-10 flex flex-row	justify-around items-center bg-gray-100	'>
        <div>
          <img src={car} alt="img" className='h-96' />
        </div>
        <div>
          <h1 className='text-4xl'>ЗАПИШИТЕСЬ НА ПРИЁМ УЖЕ СЕГОДНЯ</h1>
          <h1 className='text-red-700	font-extrabold mt-2 text-4xl'>ЗВОНИТЕ: +7 (911) 096-82-35</h1>
          <p className='mt-3 text-gray-600 text-lg'>Ваш специалист по ремонту и техническому обслуживанию автомобилей</p>
          <div className='mt-7'>
            <button className='py-3 px-10 bg-red-600 text-slate-100 font-bold hover:bg-red-700'>ЗАПИШИТЕСЬ НА ПРИЁМ</button>
            <button className='py-3 px-24 bg-gray-800 text-slate-100 font-bold hover:bg-gray-900 ml-5'>GET QUOTE</button>
          </div>
        </div>
      </div>
      <div className='p-24 flex justify-around items-center bg-red-600'>
        <div className='flex justify-center	'>
          <svg className='h-12 fill-white mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <div className='flex flex-col'>
            <p className='text-slate-300 text-xl'>Адрес:</p>
            <p className='text-slate-300 text-xl font-bold'>Придорожная аллея, 7, Санкт-Петербург</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <svg className='h-12 fill-white mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <div className='flex flex-col'>
            <p className='text-slate-300 text-xl'>Телефоны:</p>
            <p className='text-slate-300 text-xl font-bold'>+7 (911) 096-82-35; +7 (981) 105-40-63</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <svg className='h-12 fill-white mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <div className='flex flex-col'>
            <p className='text-slate-300 text-xl'>Время работы:</p>
            <p className='text-slate-300 text-xl font-bold'>Понедельник-Пятница: 9:00 - 19:00</p>
          </div>
        </div>
      </div>
      {/* карта google */}
    </main>
  )
}