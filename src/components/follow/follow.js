import React from 'react'
import './follow.scss'
import inst4 from '../../assets/img/inst4.png'
import inst1 from '../../assets/img/inst1.png'
import inst2 from '../../assets/img/inst2.png'
import inst3 from '../../assets/img/inst3.png'

function Follow() {
    return (
        <div className='follow'>
            <div className="container">
                <img src={inst1} alt="isnt" />
                <img src={inst2} alt="isnt" />
                <div className="follow__item">
                    <div className="follow__title">
                        Follow Me On
                    </div>
                    <div className="follow__btn">
                        <button>Instagram</button>
                    </div>
                </div>
                <img src={inst3} alt="isnt" />
                <img src={inst4} alt="isnt" />
            </div>
        </div>
    )
}

export default Follow