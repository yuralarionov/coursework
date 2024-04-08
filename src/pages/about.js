import React from 'react';

import img5 from '../img/about_img/img5.jpg';
import img6 from '../img/about_img/img6.jpg';
import img7 from '../img/about_img/img7.jpg';
import img8 from '../img/about_img/img8.jpg';

const calc = <svg className='h-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>
const file = <svg className='h-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
const star = <svg className='h-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>

const List = [
  {
    svg: calc,
    title: 'ОЦЕНКА',
    text: 'Мы являемся сервисом, который справедливо оценивает проблемы с автомобилем и предоставляет вам точную помощь, необходимую для обеспечения безопасности вашего автомобиля!',
  },
  {
    svg: file,
    title: 'ДОВЕРЕННЫЙ',
    text: 'Многие довольные клиенты возвращаются в наш сертифицированный сервис, чтобы получить профилактическое обслуживание или помощь наших квалифицированных автомехаников!',
  },
  {
    svg: star,
    title: 'ГАРАНТИИ',
    text: 'Мы гарантируем качество выполненных работ. Именно поэтому мы готовы решить любую возникшую вновь возникшую проблему бесплатно!',
  },
]

function Criteria({ svg, title, text }) {
  return (
    <div className='bg-slate-100 flex flex-col gap-5 p-8'>
      <button className='bg-red-700 h-16 w-16 flex justify-center items-center rounded-full'>{svg}</button>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p className='text-slate-500'>{text}</p>
    </div>
  );
}

export default function About() {
  const ListJsx = List.map(
    (elem) => {
      return (<Criteria svg={elem.svg }title={elem.title} text={elem.text} />);
    }
  );
  return (
    <main className='lg:flex lg:flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-5xl text-center pt-10'>
        <h1>ПОЧЕМУ СТОИТ ВЫБРАТЬ</h1>
        <h1 className='font-bold'>НАШ АВТОСАЛОН?</h1>
      </div>
      <div className='flex flex-col w-full md:flex md:flex-row justify-center gap-10 px-20 py-10'>
        {ListJsx}
      </div>
      <div className='grid grid-cols-1 place-items-center	md:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-3 p-3'>
        <img src={img5} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
        <img src={img6} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
        <img src={img7} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
        <img src={img8} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
      </div>
    </main>
  )
}