import React, { useState } from 'react';

import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
import celica from '../img/catalog_img/toyota/celica.jpg';
import chayser from '../img/catalog_img/toyota/chayser.jpg';
import crown from '../img/catalog_img/toyota/crown.jpg';
import mark_II from '../img/catalog_img/toyota/mark_II.jpg';
import supra from '../img/catalog_img/toyota/supra.jpg';

import a7 from '../img/catalog_img/audi/a7.jpg';
import r7 from '../img/catalog_img/audi/r7.jpg';
import r8 from '../img/catalog_img/audi/r8.jpg';
import rs6 from '../img/catalog_img/audi/rs6.jpg';
import rs7 from '../img/catalog_img/audi/rs7.jpg';
import ttrs from '../img/catalog_img/audi/ttrs.jpg';

import e34 from '../img/catalog_img/bmw/e34.jpg';
import e36_m3 from '../img/catalog_img/bmw/e36_m3.jpg';
import f90 from '../img/catalog_img/bmw/f90.jpg';
import i8 from '../img/catalog_img/bmw/i8.jpg';

import civic from '../img/catalog_img/honda/civic.jpg';
import nsx from '../img/catalog_img/honda/nsx.jpg';
import prelude from '../img/catalog_img/honda/prelude.jpg';
import s2000 from '../img/catalog_img/honda/s2000.jpg';

import mx5 from '../img/catalog_img/mazda/mx5.jpg';
import rx7_fc from '../img/catalog_img/mazda/rx7_fc.jpg';
import rx7 from '../img/catalog_img/mazda/rx7.jpg';
import rx8 from '../img/catalog_img/mazda/rx8.jpg';

import eclipse from '../img/catalog_img/mits/eclipse.jpg';
import evo_IV from '../img/catalog_img/mits/evo_IV.jpg';
import evo_IX from '../img/catalog_img/mits/evo_IX.jpg';
import evo_V from '../img/catalog_img/mits/evo_V.jpg';
import evo_X from '../img/catalog_img/mits/evo_X.jpg';

import r32 from '../img/catalog_img/nissan/r32.jpg';
import r33 from '../img/catalog_img/nissan/r33.jpg';
import r34 from '../img/catalog_img/nissan/r34.jpg';
import s13 from '../img/catalog_img/nissan/s13.jpg';
import s14 from '../img/catalog_img/nissan/s14.jpg';
import s15 from '../img/catalog_img/nissan/s15.jpg';
import sx180 from '../img/catalog_img/nissan/sx180.jpg';
import sx240 from '../img/catalog_img/nissan/sx240.jpg';

import carrera from '../img/catalog_img/porshe/carrera_gt.jpg';
import panamera from '../img/catalog_img/porshe/panamera.jpg';
import taycan from '../img/catalog_img/porshe/taycan.jpg';
import turbo_s_911 from '../img/catalog_img/porshe/turbo_s_911.jpg';

import brz from '../img/catalog_img/subaru/brz.jpg';
import forester from '../img/catalog_img/subaru/forester.jpg';
import legacy from '../img/catalog_img/subaru/legacy.jpg';
import levorg from '../img/catalog_img/subaru/levorg.jpg';
import wrx_sti from '../img/catalog_img/subaru/wrx_sti.jpg';

const avto = [
  {
    img: ae86,
    model: 'Trueno AE-86',
    price: '100.000 руб.',
  },
  {
    img: celica,
    model: 'Celica',
    price: '100.000 руб.'
  },
  {
    img: chayser,
    model: 'Chaser',
    price: '100.000 руб.'
  },
  {
    img: crown,
    model: 'Crown',
    price: '100.000 руб.'
  },
  {
    img: mark_II,
    model: 'Mark 2',
    price: '100.000 руб.'
  },
  {
    img: supra,
    model: 'Supra',
    price: '100.000 руб.'
  },
  // <<toyota
  {
    img: a7,
    model: 'A7',
    price: '100.000 руб.',
  },
  {
    img: r7,
    model: 'R7',
    price: '100.000 руб.'
  },
  {
    img: r8,
    model: 'R8',
    price: '100.000 руб.'
  },
  {
    img: rs6,
    model: 'RS6',
    price: '100.000 руб.'
  },
  {
    img: rs7,
    model: 'RS7',
    price: '100.000 руб.'
  },
  {
    img: ttrs,
    model: 'TT RS',
    price: '100.000 руб.'
  },
  // <<audi
  {
    img: r32,
    model: 'R32',
    price: '100.000 руб.',
  },
  {
    img: r33,
    model: 'R33',
    price: '100.000 руб.'
  },
  {
    img: r34,
    model: 'R34',
    price: '100.000 руб.'
  },
  {
    img: s13,
    model: 'S13',
    price: '100.000 руб.'
  },
  {
    img: s14,
    model: 'S14',
    price: '100.000 руб.'
  },
  {
    img: s15,
    model: 'S15',
    price: '100.000 руб.'
  },
  {
    img: sx180,
    model: '180SX',
    price: '100.000 руб.'
  },
  {
    img: sx240,
    model: '240SX',
    price: '100.000 руб.'
  },
  // <<nissan
  {
    img: e34,
    model: '5-series E34',
    price: '100.000 руб.',
  },
  {
    img: e36_m3,
    model: 'M3 E36',
    price: '100.000 руб.'
  },
  {
    img: f90,
    model: 'M5 F90',
    price: '100.000 руб.'
  },
  {
    img: i8,
    model: 'i8',
    price: '100.000 руб.'
  },
  // <<bmw
  {
    img: mx5,
    model: 'MX-5',
    price: '100.000 руб.',
  },
  {
    img: rx7_fc,
    model: 'RX-7 FC',
    price: '100.000 руб.'
  },
  {
    img: rx7,
    model: 'RX-7 FD',
    price: '100.000 руб.'
  },
  {
    img: rx8,
    model: 'RX-8',
    price: '100.000 руб.'
  },
  // <<mazda
  {
    img: carrera,
    model: 'Carrera GT',
    price: '100.000 руб.',
  },
  {
    img: panamera,
    model: 'Panamera',
    price: '100.000 руб.'
  },
  {
    img: taycan,
    model: 'Taycan',
    price: '100.000 руб.'
  },
  {
    img: turbo_s_911,
    model: '911 Turbo S',
    price: '100.000 руб.'
  },
  // <<porshe
  {
    img: civic,
    model: 'Civic',
    price: '100.000 руб.',
  },
  {
    img: nsx,
    model: 'NSX',
    price: '100.000 руб.'
  },
  {
    img: prelude,
    model: 'Prelude',
    price: '100.000 руб.'
  },
  {
    img: s2000,
    model: 'S2000',
    price: '100.000 руб.'
  },
  // <<honda
  {
    img: eclipse,
    model: 'Eclipse',
    price: '100.000 руб.',
  },
  {
    img: evo_IV,
    model: 'Lancer Evolution IV',
    price: '100.000 руб.'
  },
  {
    img: evo_IX,
    model: 'Lancer Evolution IX',
    price: '100.000 руб.'
  },
  {
    img: evo_V,
    model: 'Lancer Evolution V',
    price: '100.000 руб.'
  },
  {
    img: evo_X,
    model: 'Lancer Evolution X',
    price: '100.000 руб.'
  },
  // <<mits
  {
    img: brz,
    model: 'BRZ',
    price: '100.000 руб.',
  },
  {
    img: forester,
    model: 'Forester',
    price: '100.000 руб.'
  },
  {
    img: legacy,
    model: 'Legacy',
    price: '100.000 руб.'
  },
  {
    img: levorg,
    model: 'Levorg',
    price: '100.000 руб.'
  },
  {
    img: wrx_sti,
    model: 'Impreza WRX STI',
    price: '100.000 руб.'
  }
  // <<subaru
]

function AvtoSection({mark_name, start, end})
{
  let arr = avto;
  arr = arr.slice(start, end)

  return(
    <>
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>{mark_name}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        { arr.map((elem, i) => { return <AvtoList img = {elem.img} model = {elem.model} price = {elem.price}/> }) }
      </div>
    </>
  );
}

function AvtoList({ img, model, price }) {
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
    <div className='flex flex-col jusify-center items-center p-2'>
      <img src={img} alt='img' className='w-[282px] h-[282px]'/>
      <div className='w-full mt-4 text-2xl flex	flex-col jusify-center items-center'>
        <h1 className='font-bold'>{model}</h1>
        <h1 className=''>{price}</h1>
        <button onClick={formModalOpen} className='py-2 px-6 bg-red-700 border border-black rounded-3xl text-white hover:bg-gray-900'>Заказать</button>
      </div>
    </div>
    {
      formModal
        ? <Modal closeModal={formModalClose} />
        : ''
    }
    </>
  );
}

function Modal({closeModal}) {
  function handleClick(e) {
    if (e.target.classList.contains('js-modal')) {
      closeModal();
    }
  }

  return(
    <div onClick={handleClick} className='js-modal w-full h-full bg-black/75 fixed z-30 top-0 left-0 flex justify-center items-center'>
      <div className='flex flex-col justify-around items-center w-[550px] h-[450px] bg-white rounded-[40px]  relative'>
        <h1 className='font-bold text-3xl text-red-700'>Заказать автомобиль</h1>
        <svg onClick={closeModal} className='h-6 hover:fill-red-700 cursor-pointer absolute top-5 right-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <div className='flex flex-row w-full justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div>
                <h1 className='text-2xl text-red-700 font-bold'>Марка</h1>
                <select className='border border-black py-2 px-16 w-full font-bold'>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                </select>
              </div>
              <div><h1 className='text-2xl text-red-700 font-bold'>Модель</h1>
                <select className='border border-black py-2 px-16 w-full font-bold'>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                    <option value="" key="">--Любой--</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col justify-end gap-2 h-full'>
                <h1 className='text-red-700 text-lg font-bold border-b border-black'><input className='outline-none p-0.5' type="text" placeholder='ФИО' /></h1>
                <h1 className='text-red-700 text-lg font-bold border-b border-black'><input className='outline-none p-0.5' type="text" placeholder='E-mail' /></h1>
                <h1 className='text-red-700 text-lg font-bold border-b border-black'><input className='outline-none p-0.5' type="text" placeholder='Телефон' /></h1>
                <h1 className='text-red-700 text-lg font-bold border-b border-black'><input className='outline-none p-0.5' type="text" placeholder='Комментарий...' /></h1>
            </div>
        </div>
        <button className='px-16 py-3 rounded-3xl bg-red-600 text-lg text-slate-100 font-bold hover:bg-gray-900'>Отправить</button>
      </div>
    </div>
  )
}

export default function Catalog() {
  return (
    <main className='flex flex-col gap-5 p-8 '>
      {/* <div className='flex flex-row justify-start	gap-10'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-red-700 font-bold text-2xl mb-2'>Марка</p>
          <select className='border-2 border-black py-3 px-20 w-full font-bold'>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-red-700 font-bold text-2xl mb-2'>Модель</p>
          <select className='border-2 border-black py-3 px-20 w-full font-bold'>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
            <option value="" key="">--Любой--</option>
          </select>
        </div>
        <div className='flex items-end'>
          <button className='bg-red-700 py-3 px-20 border border-black rounded-2xl text-white font-bold'>Показать</button>
        </div>
      </div> */}
      <AvtoSection mark_name="Toyota"start = {0} end = {6}/>
      <AvtoSection mark_name="Audi"start = {6} end = {12}/>
      <AvtoSection mark_name="Nissan"start = {12} end = {20}/>
      <AvtoSection mark_name="BMW"start = {20} end = {24}/>
      {/* <AvtoSection mark_name="Lexus"start = {0} end = {6}/> */}
      {/* <AvtoSection mark_name="Mercedes-Benz"start = {0} end = {6}/> */}
      <AvtoSection mark_name="Mazda"start = {24} end = {28}/>
      <AvtoSection mark_name="Porshe"start = {28} end = {32}/>
      <AvtoSection mark_name="Honda"start = {32} end = {36}/>
      <AvtoSection mark_name="Mitsubishi"start = {36} end = {41}/>
      <AvtoSection mark_name="Subaru"start = {41} end = {46}/>
    </main>
  )
}


