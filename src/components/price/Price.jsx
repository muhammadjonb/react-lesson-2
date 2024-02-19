import React from 'react'

import './price.css'

const Price = () => {
  return (
    <div className='container'>
        <h1 className='price__title'>Price Table</h1>
        <p className='price__text'>We offer competitive price</p>

        <div className='price__block'>
            <div className='price__item_block'>
                <h2 className='price__item_title'>Free</h2>
                <p className='price__item_text'>Brief price description</p>
                <div className='price__item_blockk'>
                    <p className='price__desc'>0</p>
                    <div>
                        <p className='price__descc'>$</p>
                        <p className='price__desccc'>Per / month</p>
                    </div>
                </div>
                <p className='price__description'>Only 2 Operators</p>
                <p className='price__description'>Notifications</p>
                <p className='price__description'>Landing Pages</p>
                <button className='price__btn'>Order Now</button>
            </div>


            <div className='price__item_blocck'>
                <h2 className='price__item_titlee'>Free</h2>
                <p className='price__item_textt'>Brief price description</p>
                <div className='price__item_blockk'>
                    <p className='pricee__desc'>5</p>
                    <div>
                        <p className='pricee__descc'>$</p>
                        <p className='priceee__desccc'>Per / month</p>
                    </div>
                </div>
                <p className='price__descriptionn'>Only 2 Operators</p>
                <p className='price__descriptionn'>Notifications</p>
                <p className='price__descriptionn'>Landing Pages</p>
                <button className='price__btnn'>Order Now</button>
            </div>




            <div className='price__item_block'>
                <h2 className='price__item_title'>Free</h2>
                <p className='price__item_text'>Brief price description</p>
                <div className='price__item_blockk'>
                    <p className='price__desc'>10</p>
                    <div>
                        <p className='price__descc'>$</p>
                        <p className='price__desccc'>Per / month</p>
                    </div>
                </div>
                <p className='price__description'>Only 2 Operators</p>
                <p className='price__description'>Notifications</p>
                <p className='price__description'>Landing Pages</p>
                <button className='price__btn'>Order Now</button>
            </div>


        </div>


    </div>
  )
}

export default Price