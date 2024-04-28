import React from 'react'
import PropTypes from 'prop-types'



function CardItem(props) {
  return (
    <div className='card'>
      <i className={props.icon}></i>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      
    </div>
  )
}

CardItem.propTypes={
title:PropTypes.string,
content:PropTypes.string
}

export default CardItem
