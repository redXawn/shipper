import { css } from '@emotion/css';

export const navbarContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#ffffff',
  padding: '16px',
});

export const navbarLogo = css({
  display: 'flex',
  alignItems: 'center',
  width: '100px',
  height: '40px',
});

export const navbarProfilePic = css({
  marginLeft: '8px',
  width: '40px',
  height: '40px',
});

export const navbarMenu = css({
  display: 'none',
  width: '20px',
  height: '20px',
  marginRight: '16px',
  '@media (max-width: 760px)': {
    display: 'block',
  },
});
