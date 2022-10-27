import { useEffect } from 'react';
import { useLocation } from 'react-router';

function Scroll() {
  const pageLocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageLocation]);

  return null;
}

export default Scroll;
