import './App.css'
import Header from './Header/Header'
import BlogAndBookmark from './components/BlogAndBookmark/BlogAndBookmark'
import { useEffect, useState } from 'react'

function App() {
  const [cards, setCards] = useState([])
  useEffect( () => {
    fetch('data.json')
      .then(res=> res.json())
      .then(data => setCards(data))
  },[])
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>
      <BlogAndBookmark cards={cards}></BlogAndBookmark>
    </div>
  )
}

export default App
