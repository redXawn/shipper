import React from 'react';
import { css, keyframes } from '@emotion/css';

const Skeleton = (props) => {
  const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }`;

  const skeletonStyle = css`
    display: inline-block;
    height: 1em;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;
    margin: 0.5em;
    height: ${props.height ? props.height : 10}px;
    width: ${props.width ? props.width : 10}px;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background: linear-gradient(to right, #e8e8e8 0%, #e8e8e8 100%);
      animation: ${shimmer} 2s infinite;
      content: '';
    }
  `;

  return <span id="skeleton-component" className={skeletonStyle} />;
};

export default Skeleton;
