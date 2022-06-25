import React from 'react'

const Images = (props) => {
  const {img, cls = '', key} = props
  return <img key={key} className={`card-img ${cls}`} src={img} alt={img}/>
}

export default Images