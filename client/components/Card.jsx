import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
  const bookSearchResult = useSelector((state) => state.books.items)
  console.log(bookSearchResult)
  let i = 0
  return (
    <>
      {bookSearchResult &&
        bookSearchResult.map((item) => {
          console.log(i++)
          // let thumbnail =
          //   item.volumeInfo.imageLinks.smallThumbnail &&
          //   item.volumeInfo.imageLinks.thumbnail
          if (
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail &&
            item.volumeInfo.imageLinks.thumbnail &&
            item.saleInfo.listPrice &&
            item.saleInfo.listPrice.amount
          ) {
            return (
              <>
                <div className="card">
                  <img
                    src={
                      item.volumeInfo.imageLinks.smallThumbnail &&
                      item.volumeInfo.imageLinks.thumbnail
                    }
                    alt="book"
                  />
                  <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <p className="amount">
                      &#36;
                      {item.saleInfo.listPrice &&
                        item.saleInfo.listPrice.amount}
                    </p>
                  </div>
                </div>
              </>
            )
          }
        })}
    </>
  )
}

export default Card
