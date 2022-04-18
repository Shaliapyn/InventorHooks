import React, { useCallback, useState } from 'react'

import ChildComponent from './childComponent/ChildComponent'

const Callback = () => {

    const [newData, setNewData] = useState(`Give me some respect, `)

    const returnStr = useCallback((who) => newData + who, [newData])
    // const returnStr = (who) => {
    //     console.log('rendering text')
    //     return newData + who
        
    // }
  return (
    <div>
        <h2>Example of useCallback</h2>
        <ChildComponent returnStr={returnStr}/>
    </div>
  )
}

export default Callback