import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav/Nav';
import Sidebar from '../Components/Sidebar/Sidebar';
import SettingsIcon from '@mui/icons-material/Settings';
import Setting from '../Components/Setting/Setting';

import { useTransition, animated } from 'react-spring';

const Dashbord = () => {
  const [showSett, setShowSett] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const transitions = useTransition(showSett, {
    from: { opacity: 0,x:+100 },
    enter: { opacity: 1,x:0 },
    leave: { opacity: 0,x:+100 },
  });

  return (
    <>
      <div className="absolute right-4 top-32 z-20">
        <div onClick={() => setShowSett(!showSett)}>
          <SettingsIcon className="!text-5xl animate-spin cursor-pointer hover:opacity-60 !duration-1000 text-skin-col-text dila_anim" />
        </div>
        {transitions(
          (styles, item) =>
            item && <animated.div className="z-20" style={styles}><Setting/></animated.div>
        )}
      </div>
      <Nav />
      <div className='flex items-stretch h-[85vh]'>
      <Sidebar />
      <div className='flex-grow flex items-center justify-center border-skin-th-main border-[1px] rounded-md mr-5 mt-4'>
        <h1 className='text-skin-col-text text-5xl opacity-40 font-extrabold'>Dashbord</h1>
      </div>
      </div>
    </>
  );
};

export default Dashbord;
