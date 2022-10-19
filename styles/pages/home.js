import { css } from '@emotion/css';

export const homeHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#ffffff',
  padding: '16px',
  flexWrap: 'wrap',
  marginBottom: '32px',
});

export const homeBody = css({
  display: 'flex',
  overflowX: 'scroll',
  padding: '16px 0',
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
  ':active': {
    opacity: '0.8',
  },
});

export const inputDriverWrapper = css({
  position: 'relative',
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
});

export const cardWrapper = css({
  backgroundColor: '#ffffff',
  borderRadius: '4px',
  marginRight: '32px',
});

export const cardHeader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  borderBottom: '1px solid #c6c6c6',
});

export const cardPicture = css({
  borderRadius: '30px',
});

export const cardBody = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  minWidth: '260px',
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
