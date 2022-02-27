import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Setting = () => {

  const { t, i18n } = useTranslation();


  const themeU= (bool) => {
    if(!bool){
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }else{
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  const colorU= (col) => {
    const l = document.querySelector('body');
    if(col === "main"){
      l.classList.remove('theme-red');
      l.classList.remove('theme-blue');
    }else if(col === "blue"){
      l.classList.remove('theme-red');
      l.classList.add('theme-blue');
    }else{
      l.classList.remove('theme-blue');
      l.classList.add('theme-red');
    }
  }
  const langU= (lng) => {
    i18n.changeLanguage(lng);
  }

 

  return (
    <div className={`bg-skin-second duration-300 absolute right-0 rounded-xl h-56 w-52 p-3 !z-20`}>
      <div>
        <p>{t("theme")}:</p>
        <button onClick={()=>themeU(true)} className='h-8 w-8 rounded-full bg-black'></button>
        <button onClick={()=>themeU(false)} className='h-8 w-8 rounded-full bg-white ml-3'></button>
      </div>
      <div className='mt-2'>
        <p>{t('color')}:</p>
        <button onClick={()=>colorU('main')} className='h-8 w-8 rounded-full bg-[#00BCDE]'></button>
        <button onClick={()=>colorU('blue')} className='h-8 w-8 rounded-full bg-blue-600 ml-3'></button>
        <button onClick={()=>colorU('red')} className='h-8 w-8 rounded-full bg-red-600 ml-3'></button>
      </div>
      <div className='mt-2'>
        <p className='mb-2'>{t('lang')}:</p>
        <button onClick={()=> langU('en')} className='h-8 w-9 rounded-xl text-white font-bold bg-skin-main'>En</button>
        <button onClick={()=> langU('bn')} className='h-8 w-9 rounded-xl text-white font-bold bg-skin-main ml-4'>Bn</button>
      </div>
    </div>
  );
};

export default Setting;
