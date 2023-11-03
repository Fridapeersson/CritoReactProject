import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AutoScrollToTop = () => {

    const[position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setPosition(window.scrollY);
        })
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

  return (
    <Link onClick={scrollToTop} className={`${position < 550 ? "hide" : ""} scrollToTopButton`} >
        <i class="fa-solid fa-arrow-up"></i>
    </Link>
  )
}

export default AutoScrollToTop