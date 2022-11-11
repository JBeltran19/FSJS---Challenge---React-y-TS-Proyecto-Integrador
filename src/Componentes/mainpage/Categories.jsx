import React from 'react'

const Categories = () => {
    const data = [
        {
          cateImg: "./images/categories/cat1.png",
          cateName: "Equipos",
        }
    ]
  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories