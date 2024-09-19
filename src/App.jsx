
import { useState } from 'react'
import './App.css'
import Footer from './componets/Footer'
import Header from './componets/Header'
import Main from './componets/Main'
import { navItem } from './utils/constants'

function App() {
  const [page, setPage] = useState(navItem[0])
  return (
    <div className='container-fluid'>
      <Header changePage={setPage} />
      <Main page={page} />
      <Footer />
    </div>

  )
}

export default App
