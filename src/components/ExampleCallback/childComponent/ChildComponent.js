import React from 'react'

const ChildComponent = ({returnStr}) => {
  return (
    <div>
        {returnStr("son")}
    </div>
  )
}

export default ChildComponent