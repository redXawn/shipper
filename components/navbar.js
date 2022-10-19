import Image from 'next/image';
import ShipperLogo from '../assets/shipper_logo.png';
import DefaultProfile from '../assets/default_profile.png';
import BarIcon from '../assets/bars-solid.svg';

import { navbarContainer, navbarLogo, navbarProfilePic, navbarMenu } from '../styles/components/navbar';
import { mainColor, alignCenter, hideMobileSize } from '../styles/variable';

const Navbar = () => {
  return (
    <div className={navbarContainer}>
      <div className={alignCenter}>
        <div className={navbarMenu}>
          <Image src={BarIcon} alt="Menu" />
        </div>
        <div className={navbarLogo}>
          <Image src={ShipperLogo} alt="Shipper Logo" />
        </div>
      </div>
      <div className={alignCenter}>
        <label className={hideMobileSize}>
          Hello, <span className={mainColor}>Shipper User</span>
        </label>
        <div className={navbarProfilePic}>
          <Image src={DefaultProfile} alt="Default Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
