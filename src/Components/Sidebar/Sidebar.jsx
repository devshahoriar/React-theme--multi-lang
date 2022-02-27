import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddRoadIcon from '@mui/icons-material/AddRoad';

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[330px] border-[1px] border-skin-th-main mt-4 ml-4 mr-4 rounded-md">
      <div className="flex items-center mt-5 flex-col">
        <Avatar className="!h-20 !w-20 !bg-skin-second mt-10">User</Avatar>
        <p className="mt-2 font-bold text-skin-col-text opacity-75">User name</p>
      </div>
      <div className="mt-3">
        <Menu text={t('home')} icon={<HomeIcon />} />
        <Menu text={t("other")} icon={<AddRoadIcon />} />
        <Menu text={t("add")} icon={<AddCircleOutlineIcon />} />
      </div>
    </div>
  );
};

const Menu = ({ text, className, icon }) => {
  return (
    <div className={`${className} flex justify-center mb-5`}>
      <div className="h-8 w-3/4 flex justify-between items-center bg-skin-second px-5 py-6 text-white font-bold rounded-lg hover:bg-skin-main duration-500">
        <a className=" block text-2xl " href="#">
          {text}
        </a>
        {icon ? icon : null}
      </div>
    </div>
  );
};

export default Sidebar;
