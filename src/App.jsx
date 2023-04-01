import './App.css'
// import Header from './Header/Header'
import BlogAndBookmark from './components/BlogAndBookmark/BlogAndBookmark'
import { useEffect, useState } from 'react'
import Questions from './components/Questions/Questions'
import Header from './components/Header/Header'

function App() {

  // create another bookmark obj

  // create another bookmark obj

  
  const [bookmarkItem, setBookmarkItem] = useState([])
  const addBookmarkInSection = (id) => {
    const newArr = [...bookmarkItem, id]
    setBookmarkItem(newArr)
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
  },[])
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>
      <BlogAndBookmark bookmark={bookmarkItem} addBookmark={addBookmarkInSection} cards={cards} totalReadTime={minute} func={increaseReadingTime}></BlogAndBookmark>
      <Questions></Questions>
    </div>
  )
}

export default App
