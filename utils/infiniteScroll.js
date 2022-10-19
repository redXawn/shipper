import { useState, useEffect } from 'react';

const InfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching) {
      callback();
      setIsFetching(false);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      setIsFetching(true);
    }
    return;
  }
};

export default InfiniteScroll;
