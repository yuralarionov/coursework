import React from 'react';

import banner from '../img/banner.jpg';
import { Link } from 'react-router-dom';

const maintenance = <svg className="h-12 w-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
const sale = <svg className="h-12 w-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
const gear = <svg className="h-12 w-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
const electric = <svg className="h-12 w-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>;

const serviceList = [
  {
    title: "ПРОДАЖА МАШИН",
    svg: sale,
    text: 'САМЫЕ КРУТЫЕ ЯПОНСКИЕ МАШИНЫ',
  },
  {
    title: "ПРОФИЛАКТИЧЕСКОЕ ОБСЛУЖИВАНИЕ",
    svg: maintenance,
    text: 'ПРОХОДИТЕ ЛУЧШЕЕ ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ',
  },
  {
    title: "ПОЛНЫЙ РЕМОНТ",
    svg: gear,
    text: 'ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ ЛЮБЫХ УЗЛОВ АВТОМОБИЛЯ',
  },
  {
    title: "ТЮНИНГ",
    svg: electric,
    text: 'РАЗНООБРАЗНЫЙ И КАЧЕСТВЕННЫЙ ТЮННИНГ',
  },
];

function ServiceCard({ svg, title, text }) {
  return (
    <Link className='bg-mainColor h-96 w-96 flex flex-col justify-between p-10' to='/services'>
      {svg}
      <div className=''>
        <h1 className='text-slate-100 font-bold'>{title}</h1>
        <p className='text-slate-100 '>{text}</p>
      </div>
    </Link>
  );
}


export default function Home() {
  const serviceListJsx = serviceList.map(
    (elem, i) => {
      return (<ServiceCard title={elem.title} svg={elem.svg} text={elem.text} />);
    }
  );
  return(
    <main >
      <div className='w-full h-100 relative'>
        <img src={banner} alt='img' className='w-full h-full object-cover	absolute '/>
        <div className='relative text-slate-100	text-2xl p-10 relative'>
          <h1>ПОДБЕРЁМ МАШИНУ И НАСТРОИМ ЕЁ<br></br></h1>
          <h1 className='font-bold'>СПЕЦИАЛЬНО ДЛЯ ВАС</h1>
          <button className='p-2.5 mt-2 rounded-xl	bg-red-600 text-slate-100 font-bold hover:bg-red-700 active:bg-red-700'>ЗАПИШИТЕСЬ НА ПРИЁМ</button>
        </div>
      </div>
      <div className='m-10 flex flex-rows gap-10'>
        {serviceListJsx}
      </div>
      <div className='bg-black flex flex-col items-center p-5 mb-0.5'>
        <p className='text-gray-400 text-xs	p-2'>НЕМНОГО СТАТИСТИКИ О НАС</p>
        <h1 className='text-slate-100 font-bold	text-lg	'>СТАТИСТИКА ПО РЕМОНТУ АВТОМОБИЛЕЙ</h1>
        <h1 className='text-slate-100 font-extralight	mb-1.5'>КОТОРУЮ ВЫ ДОЛЖНЫ ЗНАТЬ</h1>
        <div className='flex justify-center	gap-14'>
          <div className='flex flex-col items-center'>
            <h1 className='text-red-700 font-bold text-4xl mb-1'>10</h1>
            <div className='text-slate-100 border-t-2 text-center'>
              <h1 className='font-light'>ЛЕТ</h1>
              <h1 className='font-bold'>ОПЫТА</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-red-700 font-bold text-4xl mb-1'>32</h1>
            <div className='text-slate-100 border-t-2 text-center'>
              <h1 className='font-light'>ПРОФЕССИОНАЛОВ И</h1>
              <h1 className='font-bold'>РАБОТНИКОВ</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-red-700 font-bold text-4xl mb-1'>2578</h1>
            <div className='text-slate-100 border-t-2 text-center'>
              <h1 className='font-light'>ДОВОЛЬНЫХ</h1>
              <h1 className='font-bold'>КЛИЕНТОВ</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

