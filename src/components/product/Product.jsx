import React from 'react'

import './product.css'

import Icon1 from '../../assets/icons/icon1.svg'

import Icon2 from '../../assets/icons/icon2.svg'

import Icon3 from '../../assets/icons/icon3.svg'

import Icon4 from '../../assets/icons/icon4.svg'

import BgImg from '../../assets/images/bgImg.png'

const Product = () => {
  return (
    <div className='container'>
        <h1 className='product__title'>Product  was Built Specifically for You</h1>

            <div className='product__block'>
                <div className='product__item_block'>
                    <img className='product__item_img' src={Icon1} alt="icon" />
                    <h2 className='product__item_title'>First click tests</h2>
                    <p className='product__item_text'>While most people enjoy casino gambling,</p>
                </div>

                <div className='product__item_block'>
                    <img className='product__item_img' src={Icon2} alt="icon" />
                    <h2 className='product__item_title'>First click tests</h2>
                    <p className='product__item_text'>While most people enjoy casino gambling,</p>
                </div>

                <div className='product__item_block'>
                    <img className='product__item_img' src={Icon3} alt="icon" />
                    <h2 className='product__item_title'>First click tests</h2>
                    <p className='product__item_text'>While most people enjoy casino gambling,</p>
                </div>

                <div className='product__item_block'>
                    <img className='product__item_img' src={Icon4} alt="icon" />
                    <h2 className='product__item_title'>First click tests</h2>
                    <p className='product__item_text'>While most people enjoy casino gambling,</p>
                </div>

            </div>

            <button className='product__btn'>SIGN UP NOW</button>
            <img className='bg__img' src={BgImg} width={1100} alt="BGIMG" />


    </div>
  )
}

export default Product