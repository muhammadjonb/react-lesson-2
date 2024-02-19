import React from 'react'

import './card.css'

import Image1 from '../../assets/images/CardImg1.png'

import Image2 from '../../assets/images/CardImg2.png'

import Image3 from '../../assets/images/CardImg3.png'

const Card = () => {
  return (
    <div className='container'>
        <h1 className='card__title'>Contents Strategies</h1>
        <p className='card__text'>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>

        <div className='card__block'>
            <div className='card__item_block'>
                <img className='card__item_img' src={Image1} alt="image" />
                <h3 className='card__item_title'>By <span className='card__item_span'>Wahid Ari</span> |  03 March 2019</h3>
                <p className='card__item_text'>Increasing Prosperity With Positive Thinking</p>
            </div>

            <div className='card__item_block'>
                <img className='card__item_img' src={Image2} alt="image" />
                <h3 className='card__item_title'>By <span className='card__item_span'>Wahid Ari</span> |  03 March 2019</h3>
                <p className='card__item_textt'>Motivation Is The First Step To Success</p>
            </div>

            <div className='card__item_block'>
                <img className='card__item_img' src={Image3} alt="image" />
                <h3 className='card__item_title'>By <span className='card__item_span'>Wahid Ari</span> |  03 March 2019</h3>
                <p className='card__item_text'>Success Steps For Your Personal Or Business</p>
            </div>

        </div>



    </div>
  )
}

export default Card