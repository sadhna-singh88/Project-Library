import request from 'superagent'

export function getBooks(searchfor) {
  //return { id: 1, name: 'java' }
  // console.log(searchfor)
  let qString =
    'q=' +
    searchfor +
    '&key=AIzaSyDec537pm5Gdl3AZMeJSe2N7yH_7JWDD70' +
    '&maxResults=40'
  console.log(qString)
  return request
    .get('https://www.googleapis.com/books/v1/volumes')
    .query(qString)
    .then((res) => res.body)
  //return request.get('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyDec537pm5Gdl3AZMeJSe2N7yH_7JWDD70').then((res) => res.body)
}
