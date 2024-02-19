import React from 'react'

import './footer.css'

import Image from '../../assets/images/FooterImg.png'



const Footer = () => {
  return (
    <div className='container'>
        <div className='footer__block'>
            <div>
                <h1 className='footer__title'>Join 100 Compannies who boost their business with Product</h1>
                <button className='footer__btn'>Get This</button>
            </div>
            <div>
                <img src={Image } alt="" />
            </div>
        </div>

    </div>
  )
}

export default Footer