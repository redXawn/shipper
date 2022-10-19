import Image from 'next/image';

import MagnifyIcon from '../assets/magnifying-glass-solid.svg';
import PlusIcon from '../assets/plus-solid.svg';
import ElipsisIcon from '../assets/ellipsis-solid.svg';
import UserIcon from '../assets/circle-user-solid.svg';

import {
  homeHeader,
  homeBody,
  homeFooter,
  buttonAddDriver,
  inputDriverWrapper,
  inputDriver,
  inputDriverIcon,
  cardWrapper,
  cardHeader,
  cardBody,
  footerButton,
} from '../styles/pages/home';
import {
  mainColor,
  displayFlex,
  alignCenter,
  spaceBetween,
  marginBottom8,
  fontSize12,
  grayColor,
  marginLeft8,
  marginRight16,
  fontSize14,
  flexColumn,
  fontSize10,
  marginBottom4,
  marginBottom16,
  marginTop8,
  cursorPointer,
} from '../styles/variable';

const Home = () => {
  const cardDetail = [
    { label: 'Nama Driver', value: 'First Name Last Name' },
    { label: 'Telepon', value: 'Phone Number' },
    { label: 'Email', value: 'Email Address' },
    { label: 'Tanggal Lahir', value: 'DD-MM-YYYY' },
  ];

  return (
    <div>
      <div className={homeHeader}>
        <div>
          <h2 className={`${mainColor} ${marginBottom8}`}>DRIVER MANAGEMENT</h2>
          <label className={`${fontSize12} ${grayColor}`}>Data driver yang bekerja dengan Anda.</label>
        </div>
        <div className={displayFlex}>
          <div className={`${inputDriverWrapper} ${marginRight16}`}>
            <span className={inputDriverIcon}>
              <Image height={15} width={15} src={MagnifyIcon} alt="Magnify Icon" />
            </span>
            <input className={inputDriver} placeholder="Cari Driver" />
          </div>
          <button className={buttonAddDriver}>
            TAMBAH DRIVER
            <span className={marginLeft8}>
              <Image height={15} width={15} src={PlusIcon} alt="Plus Icon" />
            </span>
          </button>
        </div>
      </div>
      <div className={homeBody}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className={cardWrapper}>
            <div className={cardHeader}>
              <label className={`${fontSize12} ${grayColor}`}>
                Driver ID <span className={mainColor}>123456</span>
              </label>
              <div className={cursorPointer}>
                <Image height={20} width={20} src={ElipsisIcon} alt="Elipsis Icon" />
              </div>
            </div>
            <div className={cardBody}>
              <div className={`${marginBottom16} ${marginTop8}`}>
                <Image width={60} height={60} src={UserIcon} alt="User Icon" />
              </div>
              <div>
                {cardDetail.map((item) => (
                  <div className={`${flexColumn} ${marginBottom8}`}>
                    <label className={`${fontSize10} ${grayColor} ${marginBottom4}`}>{item.label}</label>
                    <label className={`${fontSize14}`}>{item.value}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={homeFooter}>
        <button className={footerButton}>{'< Previous Page'}</button>
        <button className={footerButton}>{'Next Page >'}</button>
      </div>
    </div>
  );
};

export default Home;
