import React, { useEffect, useState } from "react";
let counter = 50

const ChangeFontAtInterval = () => {
  const [currentFont, setCurrentFont] = useState('')

  useEffect(() => {
  const fonts = ['times', 'firacode', 'trebuchet', 'serif', 'comic']
  const getFont = () => fonts[Math.floor(Math.random() * fonts.length)]
   let interval = setInterval(() => {
     counter--
     if (counter <= 0) {
       clearInterval(interval)
      }
     console.log('At interval...', getFont(), counter)
     setCurrentFont(getFont())
    }, 500)

    return ()=> clearInterval(interval)
  }, [currentFont])

  return (
    <section>
      <span>Hello, </span>
      <span className={'elem ' + currentFont}>World!</span>
</section>
  )
}
export default ChangeFontAtInterval