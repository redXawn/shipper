import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { setInitialData, changePage, findUser, scrollPage } from '../redux/action/listDataAction';
import { setLoading, setUnload } from '../redux/action/loadingAction';
import InfiniteScrolling from '../utils/infiniteScroll';
import { Skeleton } from '../components';

import MagnifyIcon from '../assets/magnifying-glass-solid.svg';
import PlusIcon from '../assets/plus-solid.svg';
import ElipsisIcon from '../assets/ellipsis-solid.svg';
import UserIcon from '../assets/circle-user-solid.svg';

import {
  homeHeader,
  homeBody,
  homeFooter,
  homeHeaderComponentWrapper,
  buttonAddDriver,
  inputDriverWrapper,
  inputDriver,
  inputDriverIcon,
  cardWrapper,
  cardHeader,
  cardBody,
  cardPicture,
  cardPictureWrapper,
  cardDetailWrapper,
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
  cursorPointer,
  hideMobileSize,
  marginTop8,
} from '../styles/variable';
import { getToken, setToken } from '../utils/token';

const Home = () => {
  InfiniteScrolling(scrollMobileView);

  const dispatch = useDispatch();
  const { listData, filterData, showData, totalData, totalPage, currentPage } = useSelector((state) => state.listData);
  const { loading } = useSelector((state) => state.loading);
  const [inputText, setInputText] = useState('');

  const getData = useCallback(async () => {
    dispatch(setLoading());
    try {
      const getlocalData = getToken('userData');
      if (getlocalData) {
        const parseData = JSON.parse(getlocalData);
        dispatch(setInitialData(parseData));
      } else {
        const getUser = await axios.get('https://randomuser.me/api/?results=30');
        const { results } = getUser.data;
        setToken('userData', JSON.stringify(results));
        dispatch(setInitialData(results));
      }
    } catch (error) {
      console.log('error', error);
    }
    dispatch(setUnload());
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(findUser(inputText));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputText]);

  function scrollMobileView() {
    if (currentPage < totalPage) {
      dispatch(scrollPage());
    }
  }

  function renderCard() {
    if (loading) {
      return [1, 2, 3, 4, 5].map((item, index) => (
        <div key={index} className={cardWrapper}>
          <div className={cardHeader}>
            <Skeleton height={18} width={90} />
          </div>
          <div className={cardBody}>
            <div className={cardPictureWrapper}>
              <Skeleton height={96} width={96} />
            </div>
            <div className={marginTop8}>
              <div className={`${flexColumn}`}>
                <Skeleton height={18} width={90} />
              </div>
              <div className={`${flexColumn}`}>
                <Skeleton height={18} width={90} />
              </div>
              <div className={`${hideMobileSize} ${flexColumn}`}>
                <Skeleton height={18} width={90} />
              </div>
              <div className={`${hideMobileSize} ${flexColumn}`}>
                <Skeleton height={18} width={90} />
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return showData.map((item, index) => (
      <div key={index} className={cardWrapper}>
        <div className={cardHeader}>
          <label className={`${fontSize12} ${grayColor}`}>
            Driver ID <span className={mainColor}>{item.id.value}</span>
          </label>
          <div className={cursorPointer}>
            <Image height={20} width={20} src={ElipsisIcon} alt="Elipsis Icon" />
          </div>
        </div>
        <div className={cardBody}>
          <div className={cardPictureWrapper}>
            <Image className={cardPicture} layout="fill" src={item.picture.medium} alt="User Icon" />
          </div>
          <div className={cardDetailWrapper}>
            <div className={`${flexColumn} ${marginBottom8}`}>
              <label className={`${fontSize10} ${grayColor} ${marginBottom4}`}>Nama Driver</label>
              <label className={`${fontSize14}`}>
                {item.name.first} {item.name.last}
              </label>
            </div>
            <div className={`${flexColumn} ${marginBottom8}`}>
              <label className={`${fontSize10} ${grayColor} ${marginBottom4}`}>Telepon</label>
              <label className={`${fontSize14}`}>{item.cell}</label>
            </div>
            <div className={`${hideMobileSize} ${flexColumn} ${marginBottom8}`}>
              <label className={`${fontSize10} ${grayColor} ${marginBottom4}`}>Email</label>
              <label className={`${fontSize14}`}>{item.email}</label>
            </div>
            <div className={`${hideMobileSize} ${flexColumn} ${marginBottom8}`}>
              <label className={`${fontSize10} ${grayColor} ${marginBottom4}`}>Tanggal Lahir</label>
              <label className={`${fontSize14}`}>{dayjs(item.dob.date).format('DD-MM-YYYY')}</label>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className={homeHeader}>
        <div>
          <h2 className={`${mainColor} ${marginBottom8}`}>DRIVER MANAGEMENT</h2>
          <label className={`${fontSize12} ${grayColor}`}>Data driver yang bekerja dengan Anda.</label>
        </div>
        <div className={homeHeaderComponentWrapper}>
          <div className={`${inputDriverWrapper} ${marginRight16}`}>
            <span className={inputDriverIcon}>
              <Image height={15} width={15} src={MagnifyIcon} alt="Magnify Icon" />
            </span>
            <input className={inputDriver} placeholder="Cari Driver" onChange={(e) => setInputText(e.target.value)} />
          </div>
          <button className={buttonAddDriver}>
            TAMBAH DRIVER
            <span className={marginLeft8}>
              <Image height={15} width={15} src={PlusIcon} alt="Plus Icon" />
            </span>
          </button>
        </div>
      </div>
      <div>{showData.length === 0 && !loading && <h2>No driver found</h2>}</div>
      <div className={homeBody}>{renderCard()}</div>
      <div className={`${homeFooter} ${hideMobileSize}`}>
        <button
          disabled={currentPage === 1 || showData.length === 0}
          className={footerButton}
          onClick={() => dispatch(changePage('prev'))}>
          {'< Previous Page'}
        </button>
        <button
          disabled={currentPage === totalPage || showData.length === 0}
          className={footerButton}
          onClick={() => dispatch(changePage('next'))}>
          {'Next Page >'}
        </button>
      </div>
    </div>
  );
};

export default Home;
