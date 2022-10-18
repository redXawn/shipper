import { css } from '@emotion/css';

export const sidebarContainer = css({
  width: '220px',
  // padding: '16px',
});

export const sidebarOption = css({
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '8px 16px',
  ':hover': {
    color: '#f04a41',
  },
  ':active': {
    borderLeft: '5px solid #f04a41',
    color: '#f04a41',
  },
});

export const sidebarOptionActive = css({
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '8px 16px',
  borderLeft: '5px solid #f04a41',
  color: '#f04a41',
});

export const sidebarLabel = css({
  marginLeft: '8px',
  cursor: 'pointer',
});
