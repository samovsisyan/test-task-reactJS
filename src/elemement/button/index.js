import React from 'react'

const Button = (props) => {
  const { cls = '', onClick, text } = props
  return <button className={`${cls} button`} onClick={onClick}>{text}</button>
}

export {
  Button
}