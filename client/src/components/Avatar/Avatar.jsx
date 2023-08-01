import React from 'react'

const Avatar = ({children, backgroundColor, px, py, color, fontSize, cursor}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius: "6px",
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  }
  
  return (
    <div style={style}>
       {children}
    </div>
  )
}

export default Avatar