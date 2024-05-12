import React from 'react';

import img5 from '../img/about_img/img5.jpg';
import img6 from '../img/about_img/img6.jpg';
import img7 from '../img/about_img/img7.jpg';
import img8 from '../img/about_img/img8.jpg';

const calc = <svg className='h-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>
const file = <svg className='h-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
const star = <svg className='h-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>

const qoute = <svg className='h-10 fill-red-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>

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

const ReviewsList = [
  {
    text: 'У меня был предпродажный осмотр автомобиля Mazda. Я хотел купить его, и они позволили мне привезти его в субботу без предварительной записи. Отличные ребята! Рекомендую этот сервис всем, кто ищет качество!',
    name: 'Антон Бондаренко',
    date: '4 сентября, 2021'
  },
  {
    text: 'Я регулярно провожу здесь замену масла. Работники вежливы и действительно знают, что делают. Доволен ценами здесь!',
    name: 'Руслан Сенчаков',
    date: '19 ноября, 2021'
  },
  {
    text: 'Очень довольна качеством услуг автосалона. Мастера отлично справились с ремонтом, а детейлинг оставил автомобиль блестящим. Буду обращаться снова!',
    name: 'Анастасия Панова',
    date: '27 января, 2022'
  },
  {
    text: 'Профессиональный автосервис и высокий уровень детейлинга в автосалоне. Машина после посещения заведения выглядит как новая. Большое спасибо!',
    name: 'Макар Пимонов',
    date: '5 марта, 2023'
  },
  {
    text: 'Очень довольны обслуживанием в автосалоне. Здесь работают настоящие профессионалы, которые делают свою работу на совесть. Рекомендую всем друзьям!',
    name: 'Семён Соколов',
    date: '11 декабря, 2024'
  },
  {
    text: 'У меня была проблема с впрыском топлива. Они все починили и даже помыли мою машину бесплатно! Я рада, что поехала сюда, дали мне гарантию.',
    name: 'Анастасия Грудинина',
    date: '3 апреля, 2024'
  }
]

function Criteria({ svg, title, text }) {
  return (
    <div className='bg-slate-100 flex flex-col gap-5 p-10 m-5 md:p-8'>
      <button className='bg-red-700 h-16 w-16 flex justify-center items-center rounded-full'>{svg}</button>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p className='text-slate-500'>{text}</p>
    </div>
  );
}

function Reviews({ text, name, date }) {
  return (
    <div className='py-6 px-4 flex flex-row justifu-center items-center gap-6 bg-white'>
      <div className='flex items-start h-full'>{qoute}</div>
      <div className='flex flex-col gap-3'>
        <p className='text-slate-500 text-sm'>{text}</p>
        <div>
          <p className='font-bold'>{name}</p>
          <p className='text-slate-500'>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ListJsx = List.map((elem) => {
      return (<Criteria svg={elem.svg }title={elem.title} text={elem.text} />);
    }
  );
  const ReviewsJsx = ReviewsList.map((elem) => {
    return (<Reviews text={elem.text} name={elem.name} date={elem.date} />);
  }
);
  return (
    <main className='lg:flex lg:flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-5xl text-center pt-10'>
        <h1>ПОЧЕМУ СТОИТ ВЫБРАТЬ</h1>
        <h1 className='font-bold'>НАШ АВТОСАЛОН?</h1>
      </div>
      <div className='flex flex-col w-full md:flex md:flex-row justify-center gap-10 md:px-20 md:py-10'>
        {ListJsx}
      </div>
      <div className='bg-zinc-900	w-full flex flex-col justify-between items-center p-14'>
          <p className='text-gray-400 mb-2'>НЕМНОГО СТАТИСТИКИ О НАС</p>
          <h1 className='text-slate-100 font-bold	text-4xl text-center'>СТАТИСТИКА ПО РЕМОНТУ АВТОМОБИЛЕЙ</h1>
          <h1 className='text-slate-100 font-light	mb-2 mt-2 text-4xl text-center'>КОТОРУЮ ВЫ ДОЛЖНЫ ЗНАТЬ</h1>
        <div className='w-full flex flex-col md:flex md:flex-row justify-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-red-700 font-bold text-6xl mb-1'>10</h1>
            <div className='text-2xl text-slate-100 border-t w-11/12 text-center mt-2 p-1'>
              <h1 className='font-light'>ЛЕТ</h1>
              <h1 className='font-bold'>ОПЫТА</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-red-700 font-bold text-6xl mb-1'>32</h1>
            <div className='text-2xl text-slate-100 border-t w-11/12 text-center mt-2 p-1'>
              <h1 className='font-light'>ПРОФЕССИОНАЛА И</h1>
              <h1 className='font-bold'>РАБОТНИКОВ</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-red-700 font-bold text-6xl mb-1'>2578</h1>
            <div className='text-2xl text-slate-100 border-t w-11/12 text-center mt-2 p-1'>
              <h1 className='font-light'>ДОВОЛЬНЫХ</h1>
              <h1 className='font-bold'>КЛИЕНТОВ</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 place-items-center	md:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-3 p-3'>
        <img src={img5} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
        <img src={img6} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
        <img src={img7} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
        <img src={img8} alt="img" className='h-full w-full md:h-[220px] md:w-auto' />
      </div>
      <div className='flex flex-col justify-center items-center mt-5 p-12 bg-slate-100'>
        <p className='text-slate-400 font-bold text-2xl'>ОТЗЫВЫ</p>
        <h1 className='font-bold text-4xl mt-2'>ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
          {ReviewsJsx}
        </div>
      </div>
    </main>
  )
}