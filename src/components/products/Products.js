import React from 'react'
import portfolioData from '../../assets/data/portfolioData'
import './Products.scss'
import touch from '../../assets/img/touch.png'

function Products() {
    return (
        <div className='products'>
            <div className="container">
                <div className="products__title">our core layouts</div>
                <div className="products__subtitle">Template Pages</div>
                <div className="products__list">
                    {portfolioData.map((el, index) => {
                        return <div className='products__item'>
                            <img src={el.img} alt="asd" />
                            <p >{el.title}</p>
                        </div>
                    })}
                </div>
            </div>
            <img className='products__img' src={touch} alt="asd" />
        </div>
    )
}

export default Products