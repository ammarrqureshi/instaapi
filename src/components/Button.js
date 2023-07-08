import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.onClick} value={props.text}>Login</button>
    </div>
  )
}

export default Button