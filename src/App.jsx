
import { useState } from 'react'

import userContext from './context/userContext'
import FormRegisterU from './Components/organisms/FormRegisterU';

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <FormRegisterU/>
    </>
  )
}

export default App
