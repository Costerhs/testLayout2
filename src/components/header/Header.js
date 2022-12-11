import React, { useState } from 'react'
import "./Header.scss";
import logo from '../../assets/img/Atelier..svg';
import menuIcon from '../../assets/img/menuIcon.png'
import close from '../../assets/img/close.png'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='header'>
            <div className="container">
                <div className='header__left'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='links'>
                        <a href='#' className=" link link-active">OVERVIEW</a>
                        <a href='#' className="link">PAGES</a>
                        <a href='#' className="link">PORTFOLIO</a>
                        <a href='#' className="link">TEMPLATE</a>
                        <a href='#' className="link">CONTACT</a>
                    </div>
                </div>
                <div className="header__btn">
                    BUY TEMPLATE
                </div>


                <div className="header__door" onClick={() => setOpenMenu(!openMenu)}>
                    <img src={openMenu ? close : menuIcon} alt="icon" />
                </div>

                <div className={`header__menu ${openMenu ? 'header__menu--active' : 'header__menu--passive'} `}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='links'>
                        <a href='#' className=" link link-active">OVERVIEW</a>
                        <a href='#' className="link">PAGES</a>
                        <a href='#' className="link">PORTFOLIO</a>
                        <a href='#' className="link">TEMPLATE</a>
                        <a href='#' className="link">CONTACT</a>
                    </div>
                    <div className="header__btn">
                        BUY TEMPLATE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header