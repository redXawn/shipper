import { css, injectGlobal } from '@emotion/css';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }
`;

export const bodyWrapper = css({
  minHeight: 'calc(100vh - 72px)',
  width: 'calc(100% - 220px)',
  background: '#F6F8FA;',
  padding: '32px',
});
