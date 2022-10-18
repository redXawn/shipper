import Head from 'next/head';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import idLocale from 'dayjs/locale/id';

import { Navbar, Sidebar } from '../components';
import store from '../redux/store';
import { bodyWrapper } from '../styles/global';
import { displayFlex } from '../styles/variable';

dayjs.locale('id');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, width=device-width"
        />
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex" />
        <title>Shipper</title>
      </Head>
      <Provider store={store}>
        <Navbar />
        <div className={displayFlex}>
          <Sidebar />
          <div className={bodyWrapper}>
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
