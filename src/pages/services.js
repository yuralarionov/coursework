import React, { useState } from 'react';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

const point = <svg className='h-5 w-5 fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
const services = [
  {text: 'Общий ремонт и техническое обслуживание автомобилей'},{text: 'Профилактическое обслуживание транспортных средств'},{text: 'Ремонт и замена тормозов'},
  {text: 'Ремонт топливной системы'},{text: 'Электрическая диагностика'},{text: 'Ремонт и замена тормозов'},{text: 'Ремонт и замена шин'},{text: 'Замена и установка допоборудования'},{text: 'Тюнинг'}
]

const stages = [
  {
    img: img1,
    title: 'ЗАПИШИТЕСЬ',
    text_1: 'НА ПРИЁМ'
  },
  {
    img: img2,
    title: 'ВЫБЕРИТЕ',
    text_1: 'УСЛУГУ'
  },
  {
    img: img3,
    title: 'ЗАКЛЮЧИТЕ',
    text_1: 'ДОГОВОР'
  },
  {
    img: img4,
    title: 'ПОЛУЧИТЕ СВОЙ',
    text_1: 'АВОМОБИЛЬ'
  }
]

function ServicesList({ text }) {
  return (
    <ul>
      <li className='flex flex-row'>
        {point}
        {text}
      </li>
    </ul>
  );
}

function StageList({ img, title, text_1 }) {
  return (
    <div className=''>
      <img src={img} alt='img' />
      <div className='mt-4 text-2xl	'>
        <h1 className='font-bold'>{title}</h1>
        <h1 className=''>{text_1}</h1>
      </div>
    </div>
  );
}

export default function Services() {
  const serviceListJsx = services.map((elem) => {
    return (<ServicesList svg={elem.svg} text={elem.text} />);
  });
  const stagesJsx = stages.map((elem, i) => {
    return (<StageList key={i} img={elem.img} title={elem.title} text_1={elem.text_1} />);
  });

  const [searchModal, setSearchModal] = useState(false);

  function searchModalOpen(){
    document.body.style.overflow = "hidden";
    setSearchModal(true);
  }

  function searchModalClose(){
    document.body.style.overflow = "scroll";
    setSearchModal(false);
  }

  return (
    <>
    <main>
      <div className='flex justify-around bg-gray-200 p-5'>
        <div>
          <h1 className='font-bold text-slate-400	'>НАШИ УСЛУГИ</h1>
          <h1 className='text-3xl	font-thin	mt-3'>НИЖЕ ПРИВЕДЕНЫ НЕКОТОРЫЕ</h1>
          <h1 className='text-3xl font-extrabold mt-1'>ИЗ УСЛУГ ПО ОБСЛУЖИВАНИЮ АВТОМОБИЛЕЙ,<br></br> КОТОРЫЕ МЫ ПРЕДЛГАЕМ:</h1>
          <p className='mt-5 text-slate-600'>Познакомьтесь с квалифицированной командой механиков <br></br>с более чем 5-летним безупречным опытом работы в сфере ремонта автомобилей!<br></br>Мы используем только высококачественные запчасти<br></br>и стремимся сделать ваши поездки безопасными и комфортными!<br></br>Мы всегда рады помочь вам в решении этих задач.</p>
          <button onClick={searchModalOpen} className='p-3 mt-5	bg-red-600 text-slate-100 font-bold hover:bg-red-700'>ЗАПИСАТЬСЯ НА ПРИЁМ</button>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          {serviceListJsx}
        </div>
      </div>
      <div className='p-14 flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-3 text-4xl'>
          <h1>КАК ЭТО</h1>
          <h1 className='font-bold'>РАБОТАЕТ</h1>
        </div>
        <div className='mt-8 flex gap-10'>
          {stagesJsx}
        </div>
      </div>
    </main>
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
    <div onClick={handleClick} className='js-modal fixed z-10 top-0 left-0 w-full h-full bg-black/75 flex justify-end'>
      <div className='bg-white h-full w-1/4 appear-animation'>
        <div className='flex justify-end'>
          <div onClick={closeModal} className='bg-black h-8 w-8 flex justify-center items-center'>
            <svg className='h-6 fill-white font-light hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </div>
        </div>
        <div className='flex flex-col gap-4 p-10'>
          <h1 className='text-slate-400	text-xl font-semibold	'>Выберите услугу</h1>
          <div>
            <p className='text-slate-400'>Категории обслуживания</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
            </select>
          </div>
          <div>
            <p className='text-slate-400'>Сервис</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
            </select>
          </div>
          <div>
            <p className='text-slate-400'>Адрес</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
            </select>
          </div>
          <div>
            <p className='text-slate-400'>Работник</p>
            <select className='border p-2 w-full text-slate-400'>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
              <option value="" key="">--Любой--</option>
            </select>
          </div>
          <button className='bg-red-600 hover:bg-red-700 p-3 text-white font-semibold'>Отправить</button>
        </div>
      </div>
    </div>
  )
}

