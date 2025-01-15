import { useState } from 'react'


import ContactUs from './ContactUs'
import AbountUs from './AbountUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ContactUs/>
     <AbountUs/>
       
    </>
  )
}

export default App
