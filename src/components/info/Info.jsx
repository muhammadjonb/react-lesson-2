import React from 'react'

import './info.css'

import Stars from '../../assets/images/Stars.svg'

import Image1 from '../../assets/images/InfoImg1.png'

import Image2 from '../../assets/images/InfoImg2.png'

import Image3 from '../../assets/images/InfoImg3.png'

const Info = () => {
  return (
    <div className='container'>
        <h1 className='info__title'>What Clients Say</h1>
        <p className='info__text'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

        <div className='info__block'>


            <div className='info__item_block'>
                <img src={Stars} className='info__item_img' alt="stars" />
                <p className='info__item_text'>Product helps you see how many more days you need to work to reach your financial goal.</p>
                <div className='info__item_blockk'>
                    <img src={Image1} className='ino__item_image' alt="image" />
                    <div>
                        <p className='info__desc'>Wahid Ari</p>
                        <p className='info__descc'>Designer</p>
                    </div>
                </div>
            </div>

            <div className='info__item_block'>
                <img src={Stars} className='info__item_img' alt="stars" />
                <p className='info__item_text'>Product helps you see how many more days you need to work to reach your financial goal.</p>
                <div className='info__item_blockk'>
                    <img src={Image2} className='ino__item_image' alt="image" />
                    <div>
                        <p className='info__desc'>Wahid Ari</p>
                        <p className='info__descc'>Designer</p>
                    </div>
                </div>
            </div>

                        <div className='info__item_block'>
                <img src={Stars} className='info__item_img' alt="stars" />
                <p className='info__item_text'>Product helps you see how many more days you need to work to reach your financial goal.</p>
                <div className='info__item_blockk'>
                    <img src={Image3} className='ino__item_image' alt="image" />
                    <div>
                        <p className='info__desc'>Wahid Ari</p>
                        <p className='info__descc'>Designer</p>
                    </div>
                </div>
            </div>            


        </div>

    </div>
  )
}

export default Info