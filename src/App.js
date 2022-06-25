import Cats from './pages/cats'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cats />} />
      </Routes>
    </>
  )
}
export default App
