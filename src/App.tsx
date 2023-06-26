import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TodoPage from '@/pages/todo'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/todo' element={<TodoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
