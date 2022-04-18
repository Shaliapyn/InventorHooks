import React,{useEffect, useMemo, useState} from 'react'

const ExampleMemo = () => {

    const [data, setData] = useState(null)

        useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const findLongestSent = (str) => {
    if (!str) return null

    let longestSent = "";
    for (let i = 0; i < str.length; i++){
        let currentWord = str[i].name; 
        if (currentWord.length > longestSent.length){
            longestSent = currentWord
        }
    }
    console.log('This string will not appear adter rerendering because of useMemo')
    return longestSent
  }

  const getLongestSent = useMemo(() => findLongestSent(data), [data])
  return (
    <div>
        <h2>THE LONGEST SENTENCE</h2>
        {getLongestSent}
    </div>
  )
}

export default ExampleMemo