import React, { useState } from 'react'
import { fetchBooks } from '../slices/books'
import { useDispatch } from 'react-redux'
// import './style.css'
import Card from './Card'

const Main = () => {
  const dispatch = useDispatch()
  const [searchfor, setSearchfor] = useState('')
  // const bookSearchResult = useSelector((state) => state.books)

  function handleSearchBooks() {
    // console.log('inside handle ' + searchfor)
    dispatch(fetchBooks(searchfor))
  }

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Bookflix <br /> “There is no friend as loyal as a book”
          </h1>
        </div>
        <div className="row2">
          <div className="search">
            <input
              type="text"
              name="searchBar"
              placeholder="Find my book"
              onChange={(e) => setSearchfor(e.target.value)}
            />
            <button onClick={handleSearchBooks}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* <img src="/images/book1.png" alt="book " /> */}
        </div>
      </div>
      <div className="container">{<Card />}</div>
    </>
  )
}
export default Main
