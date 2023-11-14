
import { useState } from 'react'

import userContext from './context/userContext'
import Shop from './pages/Shop';

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Shop/>
    </>
  )
}

export default App
