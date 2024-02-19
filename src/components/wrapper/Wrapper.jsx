import React from 'react'

import './wrapper.css'

import Icon from '../../assets/icons/IconBtn.svg'

import Group from '../../assets/images/Group.svg'


const Wrapper = () => {
  return (
    <div className='container wrapper'>
        <div className='wrapper__block'>

            <div className='wrapper__left'>
                <h1 className='wrapper__left_title'>Work at the speed of thought</h1>
                <p className='wrapper__left_text'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                <div className='wrapper__left_item_block'>
                    <button className='wrapper__left_btn'>Get Started</button>
                    <div className='wrapper__left_item_btn_block'>
                        <img src={Icon} alt="Icon" />
                        <button className='wrapper__item_btn'>Watch the Video</button>
                    </div>
                </div>
            </div>

            <div className='wrapper__right'>
                <img src={Group} alt="" />
            </div>

        </div>



    </div>
  )


}

export default Wrapper