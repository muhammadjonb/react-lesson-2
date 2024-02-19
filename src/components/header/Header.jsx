import React from 'react'

import Logo from '../../assets/images/Logo.svg'

import Product from '../../assets/images/Product.svg'

import Frame from '../../assets/icons/Frame.svg'

import './header.css'

const Header = () => {
  return (
    <>
            <div className="container">

            <div className='header__block'>

            <div className='header__left'>
                <img src={Logo} alt="logo" />
                <img src={Product} alt="product" />
            </div>
            <div>
                
                <ul className='header__list'>
                    <li>
                        <a className='header__link' href="#">Product</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Costumers</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Pricing</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Resources</a>
                    </li>
                </ul>
            </div>

                <div className='header__right'>
                    <button className='header__btn'>Sign In</button>
                    <button className='header__btnn'>Sign Up</button>
                    <img src={Frame} alt="Frame" />
                </div>


            </div>
            




            </div>






    
    
    
    </>
  )
}

export default Header