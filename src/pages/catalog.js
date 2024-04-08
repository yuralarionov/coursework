import React from 'react';

// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';
// import ae86 from '../img/catalog_img/toyota/ae_86.jpg';



export default function Catalog() {
  return (
    <main className='flex flex-col gap-5 p-8 bg-slate-200'>
      <div className='flex flex-row justify-start	gap-10'>
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
      </div>
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Toyota</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Audi</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Nissan</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>BMW</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Lexus</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Mercedes-Benz</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Mazda</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Porshe</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Honda</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Mitsubishi</h1>
      {/* <div>карточки</div> */}
      <h1 className='text-4xl text-red-700 font-bold w-full border-b border-black	p-2 '>Subaru</h1>
      {/* <div>карточки</div> */}
    </main>
  )
}


