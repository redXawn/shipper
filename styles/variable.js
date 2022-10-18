import { css, cx, keyframes } from '@emotion/css';

export const displayFlex = css({
  display: 'flex',
});

export const spaceBetween = css({
  display: 'flex',
  justifyContent: 'space-between',
});

export const flexColumn = css({
  display: 'flex',
  flexDirection: 'column',
});

export const alignCenter = css({
  display: 'flex',
  alignItems: 'center',
});

export const mainColor = css({
  color: '#f04a41',
});

export const mainBgColor = css({
  backgroundColor: '#f04a41',
});

// const cls1 = css`
//   font-size: 20px;
//   padding: 5px;
//   background: green;
//   color: orange;
// `;
// const cls2 = css`
//   font-size: 20px;
//   padding: 15px;
//   background: blue;
//   color: white;
// `;
// const cls3 = css({
//   display: 'flex',
//   justifyContent: 'space-around',
// });

// const cxExample = cx(cls1, cls2, cls3);

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }
//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }
//   70% {
//     transform: translate3d(0, -15px, 0);
//   }
//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `;

// const keyframesExample = css([
//   bounce,
//   css({
//     marginTop: '50px',
//     width: '20px',
//     height: '20px',
//     background: 'black',
//     borderRadius: '50%',
//     padding: '20px',
//     animation: `${bounce} 1s ease infinite`,
//     transformOrigin: 'center',
//   }),
// ]);
