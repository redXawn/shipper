import Image from 'next/image';
import ShipperLogo from '../assets/shipper_logo.png';
import DefaultProfile from '../assets/default_profile.png';

import { navbarContainer, navbarLogo, navbarProfilePic } from '../styles/components/navbar';
import { mainColor, alignCenter } from '../styles/variable';

const Navbar = () => {
  return (
    <div className={navbarContainer}>
      <div className={navbarLogo}>
        <Image src={ShipperLogo} alt="Shipper Logo" />
      </div>
      <div className={alignCenter}>
        <label>
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
