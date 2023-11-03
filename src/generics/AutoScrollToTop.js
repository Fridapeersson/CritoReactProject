import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./ScrollToTopButton.scss";

const ScrollToTop = () => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"});
    }, [location.pathname]);

  return null;
}

export default ScrollToTop