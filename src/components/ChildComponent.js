import React from 'react'

const ChildComponent = ({ children }) => {
  return (
    <div id="child">
      Find The Square <br />
      {children}
    </div>
  )
}

export default ChildComponent
