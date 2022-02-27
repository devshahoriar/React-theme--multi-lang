import React from 'react';
import AttractionsIcon from '@mui/icons-material/Attractions';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@mui/material';

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className='border-b-[1px] border-skin-th-main'>
    <div className="container mx-auto">
      <nav className="h-20 flex items-center justify-between">
        <div className="flex h-full items-center text-2xl font-bold text-skin-col-text cursor-pointer">
          <AttractionsIcon className="!text-4xl mr-2" />
          <p>{t('app.name')}</p>
        </div>
        <div>
          <form>
            <div className=' bg-skin-second rounded-md'>
            <input className='ml-2 text-white placeholder:text-white font-bold bg-transparent border-none outline-none rounded-md h-10 text-lg' type="text" placeholder={t("search")} />
            <SearchIcon className='mr-2 cursor-pointer text-white'/>
            </div>
            
          </form>
        </div>
        <div>
          <Avatar className='!bg-skin-second'></Avatar>
        </div>
      </nav>
    </div></div>
  );
};

export default Nav;
