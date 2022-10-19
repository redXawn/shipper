import React, { useState } from 'react';
import Image from 'next/image';

import { sidebarContainer, sidebarLabel, sidebarOption, sidebarOptionActive } from '../styles/components/sidebar';
import { hideMobileSize } from '../styles/variable';
import HouseIcon from '../assets/house-solid.svg';
import UserIcon from '../assets/circle-user-solid.svg';
import CalendarIcon from '../assets/calendar-days-solid.svg';

const Sidebar = () => {
  const [active, setActive] = useState(1);
  function renderRoutes() {
    const routesList = [
      { label: 'Beranda', icon: HouseIcon },
      { label: 'Driver Management', icon: UserIcon },
      { label: 'Pickup', icon: CalendarIcon },
    ];

    return routesList.map((item, index) => (
      <div
        onClick={() => setActive(index)}
        key={index}
        className={active === index ? sidebarOptionActive : sidebarOption}>
        <Image width={20} height={20} src={item.icon} />
        <label className={sidebarLabel}>{item.label}</label>
      </div>
    ));
  }

  return <div className={`${sidebarContainer} ${hideMobileSize}`}>{renderRoutes()}</div>;
};

export default Sidebar;
