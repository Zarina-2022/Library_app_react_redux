import React from 'react'

const Button = ({
    text = "",
    type ="primary",
    onClick=()=>{},
    style={},
    className = ""
}) => {
  return (
    <div
    className={`btn btn-${type} ${className}`}
    style={style}
    onClick={onClick}
    >{text}</div>
  )
}

export default Button