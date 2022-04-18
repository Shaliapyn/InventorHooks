import React, { useState } from 'react'

import Reducer from './components/Reducer'
import Examplehooks from './components/Examplehooks'
import  { ImportantContext } from "./Contexts/ImportantContext"
import Important from './components/Important'
import ExampleMemo from './components/ExampleMemo'


const App = () => {
  const [important, setImportant] = useState(true)
  return (
    <>
      <Reducer />
      <ImportantContext.Provider value={{setImportant}}>
        {important ? <Important /> : <Examplehooks />}
      </ImportantContext.Provider>
      <ExampleMemo />
    </>
  )
}

export default App