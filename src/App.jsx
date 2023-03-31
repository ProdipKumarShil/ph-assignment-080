import './App.css'
import Header from './Header/Header'
import BlogAndBookmark from './components/BlogAndBookmark/BlogAndBookmark'
import { useEffect, useState } from 'react'

function App() {
  const [bookmarkItem, setBookmarkItem] = useState([])
  const addBookmarkInSection = (id) => {
    console.log(id)
  }

  const [iconState, setIconState] = useState(false)
  const changeIcon = () => {
    setIconState(!iconState)
    console.log(iconState)
  }

  
  
  const [minute, setMinute] = useState(0)
  const increaseReadingTime = (time) => {
    setMinute(minute + time)
  }
  
  const [cards, setCards] = useState([])
  useEffect( () => {
    fetch('data.json')
      .then(res=> res.json())
      .then(data => setCards(data))
  },[iconState])
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>
      <BlogAndBookmark icon={iconState} changeIcon={changeIcon} addBookmark={addBookmarkInSection} cards={cards} totalReadTime={minute} func={increaseReadingTime}></BlogAndBookmark>
    </div>
  )
}

export default App
