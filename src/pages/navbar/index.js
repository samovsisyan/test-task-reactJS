import React from 'react'
import _ from 'lodash'

const Navbar = (props) => {
  const {data, onClick} = props
  return (
    <div className='navbar'>
      <ul>
        {!_.isEmpty(data) && data?.map(category => {
          return (
            <li key={category?.id} onClick={() => onClick(category)}>{category?.name?.toUpperCase()}</li>
          )
        })}
      </ul>
    </div>
  )
}

export {
  Navbar
}