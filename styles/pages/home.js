import { css } from '@emotion/css';

export const homeHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#ffffff',
  padding: '16px',
  flexWrap: 'wrap',
  marginBottom: '32px',
  '@media (max-width: 760px)': {
    justifyContent: 'unset',
    textAlign: 'center',
    flexDirection: 'column',
  },
  '@media (max-width: 450px)': {
    textAlign: 'unset',
    alignItems: 'unset',
  },
});

export const homeHeaderComponentWrapper = css({
  display: 'flex',
  '@media (max-width: 760px)': {
    display: 'block',
    margin: 'auto',
    marginTop: '16px',
    width: '50%',
  },
  '@media (max-width: 450px)': {
    width: '100%',
  },
});

export const homeBody = css({
  display: 'flex',
  overflowX: 'auto',
  padding: '16px 0',
  '@media (max-width: 760px)': {
    flexDirection: 'column',
    width: '70%',
    margin: 'auto',
    overflowX: 'unset',
  },
  '@media (max-width: 450px)': {
    width: '100%',
  },
});

export const homeFooter = css({
  display: 'flex',
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
});

export const buttonAddDriver = css({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f04a41',
  color: '#ffffff',
  padding: '10px 16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  ':active': {
    opacity: '0.8',
  },
});

export const inputDriverWrapper = css({
  position: 'relative',
  '@media (max-width: 760px)': {
    marginRight: '0',
    marginBottom: '16px',
  },
});

export const inputDriverIcon = css({
  position: 'absolute',
  boxSizing: 'border-box',
  top: '55%',
  left: '2px',
  transform: 'translateY(-50%)',
  padding: '4px',
});

export const inputDriver = css({
  padding: '10px 16px 10px 24px',
  borderRadius: '4px',
  border: '1px solid #c6c6c6',
  '@media (max-width: 760px)': {
    width: '100%',
  },
});

export const cardWrapper = css({
  backgroundColor: '#ffffff',
  borderRadius: '4px',
  marginRight: '32px',
  '@media (max-width: 760px)': {
    marginRight: '0',
    marginBottom: '32px',
  },
});

export const cardHeader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  borderBottom: '1px solid #c6c6c6',
});

export const cardPictureWrapper = css({
  margin: '8px 16px 16px 0',
  position: 'relative',
  width: '80px',
  height: '80px',
  '@media (max-width: 760px)': {
    width: '100px',
    height: '100px',
  },
});

export const cardPicture = css({
  borderRadius: '50px',
  width: '100%',
  height: '100%',
  position: 'relative',
  objectFit: 'cover',
});

export const cardBody = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  minWidth: '260px',
  '@media (max-width: 760px)': {
    flexDirection: 'unset',
    justifyContent: 'center',
  },
});

export const cardDetailWrapper = css({
  '@media (max-width: 760px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const footerButton = css({
  padding: '10px 16px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  fontSize: '16px',
  ':hover': {
    opacity: '0.8',
  },
  ':active': {
    opacity: '0.6',
  },
  ':disabled': {
    cursor: 'unset',
    ':active': {
      opacity: '1',
    },
    ':hover': {
      opacity: '1',
    },
  },
});
