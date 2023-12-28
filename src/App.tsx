import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Main } from './pages/Main'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <Main>
      
    </Main>
  )
}

export default App
