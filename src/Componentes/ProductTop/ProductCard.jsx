import React from "react"
import Slider from "react-slick"
import Ddata from "./Ddata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const ProductCard = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    height:0,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
 
  return (
    <>
      <Slider {...settings}>
      
        {Ddata.map((value,index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          )
        })}
      
      </Slider>
    </>
  )
}

export default ProductCard