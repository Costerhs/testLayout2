import React from 'react'
import './service.scss'
import serviceData from '../../assets/data/serviceData'

function service() {
    return (
        <div className='service'>
            <div className="container">
                <div className="service__text">
                    <div className="service__title">Our Core Features</div>
                    <div className="service__subtitle">Our Services</div>
                </div>
                <div className="service__list">
                    {serviceData.map((el, index) => {
                        return <div className='service__item'>
                            <img src={el.img} alt="asd" />
                            <p className='service__item-title'>{el.title}</p>
                            <p className='service__item-subtitle'>{el.subtitle}</p>
                            <p className='service__item-subsubtitle'>{el.subsubtitle}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default service